import { Telegraf } from 'telegraf';
import { Telegram } from 'telegraf';

const telegraf = new Telegraf('6153297281:AAGJBkOMmQgzvuzf42oz_ZhgeasX_UoybAw')
const telegram = new Telegram('6153297281:AAGJBkOMmQgzvuzf42oz_ZhgeasX_UoybAw')

telegraf.start((ctx) => {
  ctx.reply('Welcome');
})

let timer = null;

timer = setInterval(() => {
    if((new Date().getMinutes() % 3) === 0) {
        telegram.sendMessage('@MJ_prueba1', 'hola');    
    }
}, 20000)  

telegraf.launch()