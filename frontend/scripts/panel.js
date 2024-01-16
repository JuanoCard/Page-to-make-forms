const structurePanel = (src, db) => {
    const makeHTML = new src.MakeHTML()
    const mainContainer = document.querySelector('.main-container') 
    makeHTML.build(mainContainer, db.panel, db.elements)
    const createForm = new src.CreateForms(mainContainer, db, src)
    return
}

module.exports = { structurePanel }