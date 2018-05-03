let Translate = require('./core/Translate.js')


if( Translate.instance === null )
    new Translate()


module.exports = Translate.instance




