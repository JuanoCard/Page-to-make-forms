
class ManageTest {
    constructor(container, src, dbTable, dbForm, formStr){
        this.container = container
        this.contForm;
        this.contTable;
        this.contStats;
        this.backForm;
        this.src = src
        this.makeHTML = new src.MakeHTML()
        this.pops = new src.Pops()
        this.printTable;
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
        
        this.contTable.addEventListener('click', async (e) => {
            if(e.target.id === 'btn_part_header_tool_form'){
                e.target.classList.toggle('btn-fo-ac')
                this.contForm.classList.contains('min-w') ? this.contForm.classList.remove('min-w') : this.contForm.classList.add('min-w')
            }
            if(e.target.id === 'btn_part_header_tool_stats'){
                e.target.classList.toggle('btn-st-ac')
                this.contStats.classList.contains('min-w') ? this.contStats.classList.remove('min-w') : this.contStats.classList.add('min-w')
            }
            if(e.target.classList.contains('btn-del-table')){
                const back = new this.src.BackgroundBlur(document.querySelector('body'))
                const textWarn = {
                    title: 'Borrar datos',
                    body: 'Esta a punto de borrar los datos de uno de los ingresos. Este paso es irreversible. Si desea continuar con esta acción haga click en "Continuar", de lo contrario haga click en "Cancelar".'
                }
                const warn = await new this.src.Warnings(back.block, this.makeHTML, textWarn)
                if(warn.status){
                    const idkey = e.target.id.split('__')[1]
                    console.log(idkey)
                    const pos = this.arParticipants.findIndex(it => it.id === idkey)
                    this.arParticipants.splice(pos, 1)
                    this.pops.run({title: 'Participante eliminado', message: `El participante ha sido eliminado satisfactoriamente de la lista.`})
                    back.out.click()
                    this.table()
                    this.stats()
                } else {
                    back.out.click()
                }
            }
    
            // if(e.target.classList.contains('inp-td-check')){
            //     const idcheck = e.target.id
            //     const ch = e.target.checked
            //     if(ch){
            //         this.controlTable.listChecks.push(idcheck)
            //     } else {
            //         const pos = this.controlTable.listChecks.indexOf(idcheck)
            //         this.controlTable.listChecks.splice(pos, 1)
            //     }
    
            //     const contBtnDelGr = this.contTable.querySelector('.part-header-tools-opts')
            //     this.controlTable.listChecks.length > 0 ? contBtnDelGr.classList.remove('oc') : contBtnDelGr.classList.add('oc')
            // }
    
            // if(e.target.id === 'btn_part_header_del_gr'){
            //     // const back = new this.resources.BackgroundBlur(document.querySelector('#header_areas'))
            //     // const warn = await new this.resources.Warnings(back.block, this.makeHTML)
            //     this.controlTable.listChecks.forEach(ch => {
            //         const pos = this.da.findIndex(dat => dat._id === ch.split('__')[1])
            //         this.da.splice(pos, 1)
            //     })
            //     this.controlTable.listChecks = []
            //     const contBtnDelGr = this.contTable.querySelector('.part-header-tools-opts')
            //     contBtnDelGr.classList.add('oc')
            //     this.printTable.refresh()
            //     this.stats()
            // }
        })
    }
}

const structureTable = (src, dbTable, dbForm, listForms) => {
    const mainContainer = document.querySelector('.main-container')
    const manageTest = new ManageTest(mainContainer, src, dbTable, dbForm, listForms[0])

    return
}

module.exports = { structureTable }