const path = require('path')
const fs = require('fs')

// STYLE
const RESET = '\x1b[0m'
const BRIGHT = '\x1b[1m'
const DIM = '\x1b[2m'
const UNDERSCORE = '\x1b[4m'
const BLINK = '\x1b[5m'
const REVERSE = '\x1b[7m'
const HIDDEN = '\x1b[8m'



// FONT COLOR
const FCD_BLACK = '\x1b[30m'
const FCD_RED = '\x1b[31m'
const FCD_GREEN = '\x1b[32m'
const FCD_YELLOW = '\x1b[33m'
const FCD_BLUE = '\x1b[34m'
const FCD_MAGENTA = '\x1b[35m'
const FCD_CYAN = '\x1b[36m'
const FCD_WHITE = '\x1b[37m'

const FCL_GREY = '\x1b[90m'
const FCL_RED = '\x1b[91m'
const FCL_GREEN = '\x1b[92m'
const FCL_YELLOW = '\x1b[93m'
const FCL_BLUE = '\x1b[94m'
const FCL_MAGENTA = '\x1b[95m'
const FCL_CYAN = '\x1b[96m' 
const FCL_WHITE = '\x1b[97m' 


// BACKGROUND COLOR
const BG_BLACK = "\x1b[40m"
const BG_RED = "\x1b[41m"
const BG_GREEN = "\x1b[42m"
const BG_YELLOW = "\x1b[43m"
const BG_BLUE = "\x1b[44m"
const BG_MAGENTA = "\x1b[45m"
const BG_CYAN = "\x1b[46m"
const BG_WHITE = "\x1b[47m"




class Translate
{
    constructor()
    {
        Translate.instance = this;

        this._folder = null;
        this.dictionary = {}
    }


    // folder
    config( config )
    {
        if( path.isAbsolute( config.folder )  )
        {
            this._folder = config.folder;
        }
        else
        {
            this._folder = path.join(process.cwd(), config.folder)
        }
        this._readFolder()
    }


    translate()
    {
        console.log('traduzco')
    }


    addTanslate(lang, key, value)
    {
        if(!(lang in this.dictionary) )
            this.dictionary[lang] = {}
        
        this.dictionary[lang][key] = value;    
    }







    _searchTable()
    {
        console.log( 'busco una tabla de traduccion' )
    }

    _interpolate()
    {
        console.log( 'interpola una cadena clave/valor' )
    }





    _readFolder()
    {
        console.log( `${FCL_WHITE}Translations Folder:${RESET} [${FCL_CYAN}${this._folder}${RESET}]` )
        let files = fs.readdirSync(this._folder)

        for( let i = 0; i < files.length; i++ )
        {
            if( files[i].endsWith('.json') )
            {
                this._readFile( files[i] )
            }
        }
    }




    _readFile( file )
    {
        let translate = JSON.parse( fs.readFileSync(path.join(this._folder, file), 'utf8') )
        let lang = file.split('-')
        this._readJson( translate, lang[0] )
        console.log( `[${FCL_WHITE}${new Date().toLocaleTimeString()}${RESET}] (${FCL_MAGENTA}${lang[0]}${RESET}) ${FCL_GREY}${file}${RESET} ${FCL_GREEN}Done!${RESET}` )
    }





    _readJson(json, lang, key)
    {
        let aux_key = '';
        for( const i in json )
        {
            if( key === undefined )
                aux_key = i;
            else
                aux_key = `${key}.${i}`
            if( typeof json[i] === 'string' )
                this.addTanslate( lang, aux_key, json[i] )
            else
                this._readJson( json[i], lang, aux_key )

        }
    }

}
Translate.instance = null;




module.exports = Translate;