const build = (src, db) => {
    const makeHTML = new src.MakeHTML()

    const elem = {
        arrayData: [
            {predesing: 'inp_form_radio'}
        ]
    }

    makeHTML.build(document.querySelector('.main-container'), elem, db.elements)

}

module.exports = { build }