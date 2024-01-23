
class ManageTest {
    constructor(container, src, dbTable, dbForm, formStr){
        this.container = container
        this.contForm;
        this.contTable;
        this.contStats;
        this.src = src
        this.makeHTML = new src.MakeHTML()
        this.dbTable = dbTable
        this.dbForm = dbForm
        this.formStr = formStr
        this.run()
    }

    run(){
        this.buildTest()
        this.form()
        this.table()
        this.actions()
        return
    }

    buildTest(){
        this.makeHTML.build(this.container, this.dbTable.str)
        this.contForm = this.container.querySelector('#back_form')
        this.contTable = this.container.querySelector('.test-body-table')
        this.contStats = this.container.querySelector('.test-body-stats')
        return
    }

    form(){
        const printForm = new this.src.PrintForm(this.contForm, this.formStr, this.makeHTML, this.dbForm)
        printForm.save()
        return
    }

    table(data){
        const printTable = new this.src.PrintTable(this.contTable, this.src)
        return
    }

    actions(){
        this.contForm.addEventListener('click', (e) => {
            if(e.target.id === 'btn_save'){
                e.preventDefault()
                const formTest = this.contForm.querySelector('form')
                const fd = new this.src.ControlFormData(this.formStr, formTest)
                formTest.reset()

                // this.table()
                // this.stats()
                return
            }
        })
    }
}

const structureTable = (src, dbTable, dbForm, listForms) => {
    const mainContainer = document.querySelector('.main-container')
    const manageTest = new ManageTest(mainContainer, src, dbTable, dbForm, listForms[0])

    return
}

module.exports = { structureTable }