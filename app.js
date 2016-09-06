//191405159:AAGS1kw2GtE3VnhG_8y3UBYpd1zP_pr-cvI

var TelegramBot = require('node-telegram-bot-api');
var request = require('request');
var token = '191405159:AAGS1kw2GtE3VnhG_8y3UBYpd1zP_pr-cvI';
var bot = new TelegramBot(token, {polling: true});


bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    request('https://raw.githubusercontent.com/arsenicum32/ars32bot/master/mes.json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var ob = JSON.parse(body);
        console.log(ob.msg);
        ob[msg.text]?
          bot.sendMessage(chatId, ob[msg.text] , {caption: "I'm a bot!"}) :
        void(0);
      }
    });
});
