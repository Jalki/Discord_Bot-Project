//var to hold the data from the google spreedsheets
var datasheet1 
var datasheet2
var datasheet3
var datasheet4

//function to actually load the data from the spreedsheets and use for the bot!
function getvalue(auth) {
      const sheets = google.sheets({version: 'v4', auth});
      sheets.spreadsheets.values.get({
        spreadsheetId: 'SpreadsheetId';
        range: 'Copa!B2:B3',
      },(err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        datasheet1 = res.data.values[0];
        datasheet2 = res.data.values[1];
        datasheet3 = res.data.values[2];
        datasheet4 = res.data.values[3];
        });
    }