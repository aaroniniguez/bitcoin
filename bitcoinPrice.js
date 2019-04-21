const request = require("request");
const imessage = require("osa-imessage");
const aaron = "+19165178775";
const bitcoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json"
const initialPrice = 5041;
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
        var profit = Math.round(currentVal/initialPrice * 2570 - 2570); 
        imessage.send(aaron, currentVal + "\nprofit: "+profit);
    }
    else{
        console.log("error:", error);
    }
});
