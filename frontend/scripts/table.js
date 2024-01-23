
const structureTable = (src, db, listForms) => {

    const makeHTML = new src.MakeHTML()
    makeHTML.build(document.querySelector('.main-container'), db.str)
    const contTable = document.querySelector('.test-body-table')
    const printTable = new src.PrintTable(contTable, src, listForms[0])

    return
}

module.exports = { structureTable }