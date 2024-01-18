const build = (src, db) => {
    const makeHTML = new src.MakeHTML()

    const elem = {
        arrayData: [
            {predesing: 'box_warning'}
        ]
    }

    makeHTML.build(document.querySelector('.main-container'), elem, db.elements)

}

module.exports = { build }