const hom = require('./frontend/scripts/home.js')
const pan = require('./frontend/scripts/panel.js')
const tab = require('./frontend/scripts/table.js')
const bui = require('./frontend/scripts/building.js')
require('./frontend/styles/styles.css')

const src = require('./frontend/src/resources.js')
import { home, makeForm, table, listForms, elementsList } from './frontend/db/db.js'

const structures = () => {
    hom.structureHome(src, home)
    const main = document.querySelector('.main-container')
    main.addEventListener('click', (e) => {
        if(e.target.id === 'start_create'){
            main.innerHTML = ''
            pan.structurePanel(src, makeForm, listForms)
        }
        if(e.target.id === 'create_back_home' || e.target.id === 'table_back_home'){
            main.innerHTML = ''
            hom.structureHome(src, home)
        }
        if(e.target.id === 'table_panel'){
            main.innerHTML = ''
            const formTest = listForms.find(fo => fo.id === e.target.dataset.f)
            tab.structureTable(src, table, makeForm, formTest)
        }
        if(e.target.id === 'test_back_form'){
            main.innerHTML = ''
            pan.structurePanel(src, makeForm, listForms)
        }
    })
    // bui.build(src, elementsList)
}

structures()