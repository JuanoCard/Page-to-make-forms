const hom = require('./frontend/scripts/home.js')
const pan = require('./frontend/scripts/panel.js')
const bui = require('./frontend/scripts/building.js')
require('./frontend/styles/styles.css')

const src = require('./frontend/src/resources.js')
import { home, makeForm, elementsList } from './frontend/db/db.js'

const structures = () => {
    const makeHTML = new src.MakeHTML()
    // hom.structureHome(makeHTML, home)
    pan.structurePanel(src, makeForm)
    // bui.build(src, elementsList)
}

structures()