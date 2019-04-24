const request = require("request");
const imessage = require("osa-imessage");
const aaron = "+19165178775";
const bitcoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json"
const initialPrice = 5041;
const leverage = 2570
//hmmm
request(bitcoinUrl, function(error, response, body){
    if(!error){
        try{
            var obj = JSON.parse(body); 
        }
        catch(err){
            console.log("Error: couldnt read json");
        }
        var currentVal = parseFloat(obj.bpi.USD.rate.replace(",",""));
        var profit = Math.round(currentVal/initialPrice * leverage - leverage); 
        imessage.send(aaron, "Bitcoin: $"+currentVal + "\nprofit: $"+profit);
    }
    else{
        console.log("error:", error);
    }
});


//TESTING