const { MakeHTML } = require('../src/resources.js')
import { home } from '../db/db.js'

const makeHTML = new MakeHTML

makeHTML.build(document.querySelector('.main-container'), home.main)

