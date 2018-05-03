const path = require('path')
const fs = require('fs')

class Translate
{
    constructor()
    {
        Translate.instance = this;

        this._folder = null;
        
    }



    config( config )
    {
        // parametros
            // archivos de traducciones
            // lenguage por defecto
            // verbose -> habla de como va haciendo cosas

        // loaded
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


    addTanslate()
    {
        console.log( 'añade una traducicon al diccionario' )
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
        console.log( 'leo el directorio: ', this._folder )
        let files = fs.readdirSync(this._folder)

        for( let i = 0; i < files.length; i++ )
        {
            if( files[i].endsWith('.json') )
            {
                console.log( files[i] )

            }
        }



    }

    _readJson()
    {
        console.log( 'Lee el json de traducicon' )
    }


    

}
Translate.instance = null;




module.exports = Translate;