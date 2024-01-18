const build = (src, db) => {
    const makeHTML = new src.MakeHTML()

    const elem = {
        arrayData: [
            {predesing: 'inp_det_text'},
            {predesing: 'inp_det_select'},
        ]
    }

    makeHTML.build(document.querySelector('.main-container'), elem, db.elements)

}

module.exports = { build }