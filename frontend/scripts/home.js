const structureHome = ( src, db ) => {
    const makeHTML = new src.MakeHTML()
    makeHTML.build(document.querySelector('.main-container'), db)
    return
}

module.exports = { structureHome }