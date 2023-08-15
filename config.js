/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285786539008', 'FAHRUL MT', true],
  ['6285786539008'], 
  ['6285786539008'],
  ['6285786539008']
] // Nomor Owner

global.mods = ['6285786539008'] 
global.prems = ['6285786539008', '6282293246399', '6283856504642']

// Harus di isi
global.lann = 'chuDEfcB' // https://api.betabotz.org
global.btc = 'xPQzgABf' // https://api.botcahx.live

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'isi_dulu'
}

// Watermark
global.nama = 'FAHRUL MT' // nama owner
global.nomor = '6285786539008' // nomor owner
global.nans = 'ZERO MD' // nama bot 
global.thumb = 'https://telegra.ph/file/9f1c675b22c865fd94543.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv' // link group yang ada di menu

// Sticker wm
global.packname = 'ZERO MD┃ᴮᴼᵀ' 
global.author = '@fahrul' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/fahrul_mt\n'
global.fgsc = 'https://github.com/fahrul6868' 
global.fgyt = 'https://fahrul2951.my.id/'
global.fgpyp = 'https://saweria.co/fahrul_mt'
global.fglog = 'https://telegra.ph/file/9f1c675b22c865fd94543.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})