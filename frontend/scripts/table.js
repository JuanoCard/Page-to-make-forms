
class ManageTest {
    constructor(container, src, dbTable, dbForm, formStr){
        this.container = container
        this.contForm;
        this.contTable;
        this.contStats;
        this.backForm;
        this.src = src
        this.makeHTML = new src.MakeHTML()
        this.dbTable = dbTable
        this.dbForm = dbForm
        this.formStr = formStr
        this.arParticipants = []
        this.run()
    }

    run(){
        this.buildTest()
        this.form()
        this.actions()
        return
    }

    buildTest(){
        this.makeHTML.build(this.container, this.dbTable.str)
        this.contForm = this.container.querySelector('.test-body-form')
        this.contTable = this.container.querySelector('.test-body-table')
        this.contStats = this.container.querySelector('.test-body-stats')
        this.backForm = this.container.querySelector('#back_form')
        this.statFrecuency = this.contStats.querySelector('.stat-box-frec')

        return
    }

    form(){
        const printForm = new this.src.PrintForm(this.backForm, this.formStr, this.makeHTML, this.dbForm)
        printForm.save()
        return
    }

    table(){
        const partTableCont = document.querySelector('#part_table_cont')
        if(partTableCont){
            new this.src.PrintTable(this.contTable, this.src, this.formStr, this.arParticipants)
        } else {
            this.contTable.innerHTML = ''
            this.makeHTML.build(this.contTable, this.dbTable.tableBox)
            new this.src.PrintTable(this.contTable, this.src, this.formStr, this.arParticipants)
        }

        this.stats()
        
        return
    }

    stats(){
        const dataStats = this.formStr.structure
            .filter(it => it.type !== 'text' && it.type !== 'email')
            .map(it => {
                return {
                    et: it.et,
                    concat: it.concat
                }
            })

            
        const bars = new this.src.BarsHoriz(this.statFrecuency, dataStats)
        const arData = this.arParticipants.map(it => { return it.data_part })
        bars.dinamic(arData)
    }

    actions(){
        this.backForm.addEventListener('click', (e) => {
            if(e.target.id === 'btn_save'){
                e.preventDefault()
                const formTest = this.backForm.querySelector('form')
                const fd = new this.src.ControlFormData(this.formStr, formTest)
                this.arParticipants.push(fd)
                formTest.reset()

                this.table()
                return
            }
        })
        
        this.contTable.addEventListener('click', (e) => {
            if(e.target.id === 'btn_part_header_tool_form'){
                e.target.classList.toggle('btn-fo-ac')
                this.contForm.classList.contains('min-w') ? this.contForm.classList.remove('min-w') : this.contForm.classList.add('min-w')
            }
            if(e.target.id === 'btn_part_header_tool_stats'){
                e.target.classList.toggle('btn-st-ac')
                this.contStats.classList.contains('min-w') ? this.contStats.classList.remove('min-w') : this.contStats.classList.add('min-w')
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