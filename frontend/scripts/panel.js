
const structurePanel = (src, db, listForms) => {
    const mainContainer = document.querySelector('.main-container') 
    const makeHTML = new src.MakeHTML()
    makeHTML.build(mainContainer, db.panel, db.elements)
    const createForm = new src.CreateForms(mainContainer, db, src, listForms)

    return
}

module.exports = { structurePanel }