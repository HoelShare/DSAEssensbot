const Telegraf = require('telegraf');
const fs = require('fs');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username
});
bot.command('food', ctx => {
    const files = fs.readdirSync('./receipts');
    console.log('files', files);
    const index = Math.floor((Math.random() * files.length));
    console.log('index', index);
    const data = fs.readFileSync('receipts/' + files[index]);
    console.log('data', data.toString());
    return ctx.reply(data.toString(), { parse_mode: 'Markdown' });
});

bot.launch();