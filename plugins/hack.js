// Oreo
const {
    FancyRandom,
    getListFromCommand,
    skbuffer
  } = require("raganork-bot");
  const {
    Module,
    commands
  } = require('../main')
  const {
    MODE,
    ALIVE,
    BOT_INFO
  } = require('../config');
  const config = require('../config');
  const {
    parseAlive
  } = require('./misc/misc');
  let w = MODE == 'public' ? false : true
  var _0x2812ed=_0x3677;function _0x3677(_0x476363,_0x2b3418){var _0x2fbb31=_0x2fbb();return _0x3677=function(_0x367719,_0x2e5f11){_0x367719=_0x367719-0x8e;var _0x461eb7=_0x2fbb31[_0x367719];return _0x461eb7;},_0x3677(_0x476363,_0x2b3418);}(function(_0x244758,_0x1e3593){var _0xe8f516=_0x3677,_0x10f50a=_0x244758();while(!![]){try{var _0x74d44f=-parseInt(_0xe8f516(0x9f))/0x1*(-parseInt(_0xe8f516(0x9a))/0x2)+-parseInt(_0xe8f516(0x9c))/0x3+-parseInt(_0xe8f516(0x99))/0x4+parseInt(_0xe8f516(0x97))/0x5*(-parseInt(_0xe8f516(0xa2))/0x6)+parseInt(_0xe8f516(0xa1))/0x7+-parseInt(_0xe8f516(0x8f))/0x8+-parseInt(_0xe8f516(0x9e))/0x9*(-parseInt(_0xe8f516(0x9d))/0xa);if(_0x74d44f===_0x1e3593)break;else _0x10f50a['push'](_0x10f50a['shift']());}catch(_0x5b85be){_0x10f50a['push'](_0x10f50a['shift']());}}}(_0x2fbb,0xbd9d9));var os=require('os');const { lchown } = require("fs");
  const {spawnSync}=require(_0x2812ed(0x93)+_0x2812ed(0x90)+'pro'+_0x2812ed(0xa0)+'s'),child=spawnSync(_0x2812ed(0x95)+'fet'+'ch',[_0x2812ed(0x92)+_0x2812ed(0xa3)+'ut']);function bytesToSize(_0x42c818){var _0x55538a=_0x2812ed,_0x4fc952=[_0x55538a(0x9b)+'es','KB','MB','GB','TB'];if(_0x42c818==0x0)return'0\x20B'+'yte';var _0x1aa1c3=parseInt(Math['flo'+'or'](Math['log'](_0x42c818)/Math['log'](0x400)));return Math[_0x55538a(0x94)+'nd'](_0x42c818/Math[_0x55538a(0x8e)](0x400,_0x1aa1c3),0x2)+'\x20'+_0x4fc952[_0x1aa1c3];}var used=bytesToSize(os[_0x2812ed(0x96)+_0x2812ed(0x91)+'m']()),total=bytesToSize(os['tot'+_0x2812ed(0x98)+'em']());function _0x2fbb(){var _0xf10c15=['4304672KxZanY','5984IOOiuh','Byt','1824645uDmejr','3790EcSgQu','65763koNUnW','472SVmexJ','ces','3146514uYYRqZ','6ObUbhJ','tdo','pow','8408080LpvaFi','ld_','eme','--s','chi','rou','neo','fre','5595105XPsOXl','alm'];_0x2fbb=function(){return _0xf10c15;};return _0x2fbb();}
  Module({
    pattern: 'hack',
    fromMe: w,
    use: 'utility',
    desc: 'Measures ping'
  }, (async (message, match) => {
    let sent_msg = await message.client.sendMessage(message.jid, {text:"Installing.."})
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing Files To Hacked Private Server...',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Target Selected...',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing... 0%\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing... 4%\n█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing... 8%\n██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('lnstallig... 20%\n█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing... 36%\n█████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing... 52%\n█████████████▒▒▒▒▒▒▒▒▒▒▒▒ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing... 84%\n█████████████████████▒▒▒▒ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Installing... 100%\n████████Installed██████████ ',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Target files Uploading...\n\nDirecting To Remote server to hack..',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('Connecting nd getting combined token from web.whatsapp.com',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~#',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~#',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~#',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...\nvictim detected in ghost ...',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...\nvictim detected in ghost ...\n\nAll Done!',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Letz Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...\nvictim detected  in ghost ...\n\nAll Done!\nInstalling Token!\nToken=`DJ65gulO90P90nlkm65dRfc8I',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('starting whatsapp hack',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking... 0%completed.\nTERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (1.3) kB',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking... 4% completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Package',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking.....6% completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target account chat\n lding chat tg-bot bruteforce finished',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking.....8%completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target account chat\n lding chat tg-bot bruteforce finished\n creating pdf of chat',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking....15%completed\n Terminal:chat history from Whatsapp exporting to private database.\n terminal 874379gvrfghhuu5tlotruhi5rbh installing',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking....24%completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target account chat\n lding chat tg-bot bruteforce finished\nerminal:chat history from Whatsapp exporting to private database.\n terminal 874379gvrfghhuu5tlotruhi5rbh installed\n creting data into pdf',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking....32%completed\n looking for use history \n downloading-Whatsapp -id prtggtgf . gfr (12.99 mb)\n collecting data starting imprute attack to user account\n chat history from Whatsapp exporting to private database.\n terminal 874379gvrfghhuu5tlotruhi5rbh installed\n creted data into pdf\nDownload sucessful Bruteforce-Whatsapp-0.1.tar.gz (1.3) kb',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking....38%completed\n\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Package\n  Downloading Whatsapp-Data-Sniffer-7.1.1-py2.py3-none-any.whl (82 kB): finished with status - Done\nCreated wheel for Whatsapp: filename=Whatsapp-Data-Sniffer-0.0.1-py3-none-any.whl size=1306 sha256=cb224caad7fe01a6649188c62303cd4697c1869fa12d280570bb6ac6a88e6b7e',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking....52%completed\nexterting data from Whatsapp private server\ndone with status 36748hdeg \n checking for more data in device',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking....60%completed\nmore data found im target device\npreparing to download data\n process started with status 7y75hsgdt365ege56es \n status changed to up',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking....73% completed\n downloading data from device\n process completed with status 884hfhjh\nDownloading-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target\n lding chat tg-bot bruteforce finished\n creating pdf of chat',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('hacking...88%completed\nall data from Whatsapp private server downloaded\nterminal download sucessfull--with status jh3233fdg66y yr4vv.irh\n data collected from tg-bot\nTERMINAL:\n Bruteforce-Whatsapp-0.1.tar.gz (1.3)downloaded',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('100%\n█████████HACKED███████████ `\n\n\n  TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Package\n  Downloading Whatsapp-Data-Sniffer-7.1.1-py2.py3-none-any.whl (82 kB)\nBuilding wheel for Tg-Bruteforcing (setup.py): finished with status - Done\nCreated wheel for Whatsapp: filename=Whatsapp-Data-Sniffer-0.0.1-py3-none-any.whl size=1306 sha256=cb224caad7fe01a6649188c62303cd4697c1869fa12d280570bb6ac6a88e6b7e\n  Stored in directory:',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit('account hacked\n collecting all data\n converting data into pdf',message.jid,sent_msg.key)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await message.edit("pdf created click link below to download data\n\nDon't worry only i can open this 😎😎.. If u don't Believe me, try to download` 🙂\n\nhttps://drive.google.com/file/d/1JNA0HY1v8ClBDU9PhmyQ-z8KuLgvteT5/view?usp=sharing",message.jid,sent_msg.key)
  }));
