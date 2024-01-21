const hom = require('./frontend/scripts/home.js')
const pan = require('./frontend/scripts/panel.js')
const bui = require('./frontend/scripts/building.js')
require('./frontend/styles/styles.css')

const src = require('./frontend/src/resources.js')
import { home, makeForm, elementsList } from './frontend/db/db.js'

const structures = () => {
    hom.structureHome(src, home)
    const main = document.querySelector('.main-container')
    main.addEventListener('click', (e) => {
        if(e.target.id === 'start_create'){
            main.innerHTML = ''
            pan.structurePanel(src, makeForm)
        }
        if(e.target.id === 'create_back_home'){
            main.innerHTML = ''
            hom.structureHome(src, home)
        }
    })
    // bui.build(src, elementsList)
}

structures()