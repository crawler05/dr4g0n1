const fs = require('fs')

//===========================//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//===========================//

//General Settings 
global.apikey = 'ptla_6pKq2Q5hGxajeMBrRdazQLkG1NSpXwIIi1FYZNmkUkQ' //Ganti pake apikey panel lu
global.capikey = 'ptlc_USy1wdkOexq5IIfootLXskwsgoZvDu1oQvgybJ0qlWC' //Ganti Pake Capikey Panel Lu
global.domain = 'https://zetsubo-stardust.zxvision.biz.id'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu

//===========================//

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['27635696219']
global.ownMain = '27635696219'
global.NamaOwner = '𝖈𝖍𝖗𝖔𝖓𝖔😈.ᵉˣᵉ' //gausah diganti 
global.sessionName = 'ryokunsession'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𝖈𝖍𝖗𝖔𝖓𝖔😈' //ganti aj klo mau
global.author = '𝖈𝖍𝖗𝖔𝖓𝖔😈.ᵉˣᵉ' //ganti aj klo mau
global.packname = '𝖈𝖍𝖗𝖔𝖓𝖔😈' //ganti aj klo mau
global.yt = 'https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39' //gausah diganti

//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`
 
//===========================//

global.country = `27`
global.system = {
gmail: `jokerjesterp@gmail.com`,
}

//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
menuh: '』––––––',
menub: '┊☃︎ ',
menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

//===========================//

   //Respon
global.mess = { // bagian ini gausah diganti 
ingroup: 'Gabisa lah kocak, Fitur ini khusus untuk group💢',
admin: `❗Lu Bukan Admin Bego, Lu Gabakal Bisa Make Fitur Ini. Awokawokawok 😝`,
owner: `Waduhh! ,Lu bukan \`owner\` gw bg🗣️`,
premium: 'You are not a premium user, Lu gabisa akses fitur ini karna lu bukan premium, aowkawokawok🐦',
seller: 'Lu bukan seller, Jadi gabakal bisa make😹',
usingsetpp: 'Setpp hanya bisa dipake owner, lu kira gw bego? 🤓',
wait: '*🩸𝐖𝐚𝐢𝐭 𝐭𝐨 𝐛𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐞𝐝☣️*',
succes: '⚠️𝐌𝐨𝐭𝐡𝐞𝐫𝐟𝐮𝐜𝐤𝐞𝐫 𝐚𝐦 𝐃𝐫𝐚𝐠𝐨𝐧 𝐧𝐨 𝐦𝐞𝐫𝐜𝐲 𝐣𝐮𝐬𝐭 𝐤𝐢𝐥𝐥𝐞𝐝 😂⚰️',
bugrespon: `📌𝐊𝐢𝐥𝐥𝐢𝐧𝐠 ......💀`
}

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})