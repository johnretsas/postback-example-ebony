const bot = require('../../bot');

module.exports = [
    { regex: /^BUTTON$/, action: (id, user) => bot.actions.exec('understandPostBackButton', id, user) },
    { regex: /^HODOR$/, action: (id, user) => bot.actions.exec('hodor', id, user) }
];
