const request = require("request");
const imessage = require("osa-imessage");
const aaron = "+19165178775";
const bitcoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json"
request(bitcoinUrl, function(error, response, body){
    if(!error){
        try{
            var obj = JSON.parse(body); 
        }
        catch(err){
            console.log("Error: couldnt read json");
        }
        imessage.send(aaron, obj.bpi.USD.rate);
    }
    else{
        console.log("error:", error);
    }
});
