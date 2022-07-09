require('dotenv/config');

const tmi = require('tmi.js');
const botName = process.env.BOT_NAME
const channel = process.env.CHANNEL
const token = process.env.TOKEN

//site para pegar o token: https://twitchapps.com/tmi/

const opts = {
    identity: {
      username: botName,
      password: token
    },
    channels: [ channel ]
  };

const client = new tmi.client(opts);

function mensagemChegou(alvo, contexto, mensagem, ehBot) {
    if (ehBot) {
      return;
    }

  const nomeDoComando = mensagem.trim();

  var resposta = "";
  switch (nomeDoComando) {
    case "!donate":
        resposta = 'https://streamlabs.com/marquesano/tip';
        break;
    case "!discord":
        resposta = 'https://discord.gg/wyZK64NbZg';
        break;
    case "!youtube":
        resposta = 'https://www.youtube.com/channel/UCZqqUeECDSfZElYwavmc0aw';
        break;
    case "!teclado":
        resposta = 'Logitech G213';
        break;
    case "!mouse":
        resposta = 'Logitech G403';
        break;
    case "!react":
        resposta = 'Manda o link pra nos que eu abro aqui';
        break;
    case "!github":
        resposta = 'https://github.com/acmachado14';
        break;
    case "!comandos":
        resposta = '!donate !discord !youtube !teclado !mouse !react !github';
        break;
    default:
        resposta = '0';
        console.log(`* Não conheço o comando ${nomeDoComando}`);
        break;
    }

    if (resposta != '0'){
      console.log(`* Foi Executado o comando ${nomeDoComando}`);
      client.say(alvo, resposta);
    }
}

function entrouNoChatDaTwitch(endereco, porta) {
    console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}

// Registra as funções
client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);
// Connecta na Twitch:
client.connect();