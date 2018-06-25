const bot = require('../../bot');

module.exports = {
    menu: {
        
    },
    withoutData: {
        
    },
    withData: {
        yn : (id, user, payload) => bot.actions.exec("kudosOrNot", id, user, payload.answer)
    }
}