import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['543804505177', 'Argussbot-MD 𐂂', true], ['543804505177', 'Colaborado', true], ['543804505177'], ['543804505177'], ['543804505177'], ['543804505177'], ['543804505177'], ['543804505177'], ['543804505177'], ['543804505177'], ['543804505177']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['400359205']
global.suittag = ['994400359205']
global.mods = []
global.prems = []

global.packname = 'Argussbot-MD'
global.author = ''
global.wm = '© Argussbot-MD'
global.wm2 = 'Arguss : 𝗕𝗈𝗍'
global.azami = 'Ale'
global.cb = 'Arguss-MD'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '54380505177'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
