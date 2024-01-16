const structureHome = ( makeHTML, db ) => {
    makeHTML.build(document.querySelector('.main-container'), db)
    return
}

module.exports = { structureHome }