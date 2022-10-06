// make a POST request to submit the transaction validation
// https://automation-help.com/http-requests-google-app-script/
// https://spreadsheet.dev/comprehensive-guide-urlfetchapp-apps-script
// https://wiki.awin.com/index.php/API_transaction_validation
// https://wiki.awin.com/index.php/API_authentication

function makePostRequest(){

  let jsonData =
  [
        /*{
            "action": "amend",
            "approve": false,
            "transaction": {
                "transactionId": "484816099",
                "amendReason": "partial return",
                "currency": "EUR",
                "saleAmount": 44.76,
                "transactionParts": [{
                    "amount": 44.76,
                    "commissionGroupCode": "DEFAULT"
                }]
            }
          },
          {
            "action": "decline",
            "transaction":
              {
                  "transactionId": 1234567,
                  "declineReason": "order returned"
              }
          },*/
    {
    "action": "approve",
    "transaction":
        {
            "orderRef": "8910591",
            "transactionDate": "2022-09-15T15:41:00",
            "timezone": "Europe/Paris"
        }
    }
  ]
  let header = {
    'Authorization': 'Bearer confidentialAwinToken',
  }
  var options = {
    'method' : 'post',
    'headers': header,
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(jsonData)
  }
  let response = UrlFetchApp.fetch('https://api.awin.com/advertisers/14701/transactions/batch', options);
  Logger.log(response)
}