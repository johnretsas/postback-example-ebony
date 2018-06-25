const { Message, elements } = require('ebony-framework').sendAPI;
const { ButtonTemplate, PostbackButton } = elements;
const bot = require('../../bot');


function understandPostBackButton(id, user) {
    {
            const message = new Message({
            attachment: new ButtonTemplate("Do you understand how Postback buttons work now?", [
                new PostbackButton("Yes", { type: "yn", answer: "yes" }),
                new PostbackButton("No", { type: "yn", answer: "no" }),
            ])
        });
        return bot.send(id, message);
    }
}

function kudosOrNot(id, user, answer){
    if (answer === 'no') {
        const message = new Message({
            attachment: new ButtonTemplate("Do you understand how Postback buttons work now?", [
                new PostbackButton("Yes", { type: "yn", answer: "yes" }),
                new PostbackButton("No", { type: "yn", answer: "no" }),
            ])
        });
        return bot.send(id, message);
    }
    else
    {
        const message = new Message({
            text: "Kudos..!!"
        });
        return bot.send(id, message);
    }
}



module.exports = {
    kudosOrNot,
    understandPostBackButton
}