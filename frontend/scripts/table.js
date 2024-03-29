
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
        this.listChecks = []
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
        if(this.arParticipants.length > 0){
            const partTableCont = document.querySelector('#part_table_cont')
            if(partTableCont){
                new this.src.PrintTable(this.contTable, this.src, this.formStr, this.arParticipants)
            } else {
                this.contTable.innerHTML = ''
                this.makeHTML.build(this.contTable, this.dbTable.tableBox)
                new this.src.PrintTable(this.contTable, this.src, this.formStr, this.arParticipants)
            }
            this.stats()
        } else {
            this.contTable.innerHTML = ''
            this.statFrecuency.innerHTML = ''
            const textEmpty = {
                arrayData: [
                    {elem: 'h4', text: 'La tabla de datos se visualizará aqui al guardar la información del formulario'}
                ]
            }
            this.makeHTML.build(this.contTable, textEmpty)
        }

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
        document.addEventListener('click', (e) => {
            if(e.target.id === 'table_back_home'){
                console.log('de vuelta a casa')
            }
        })

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
                    const pos = this.arParticipants.findIndex(it => it.id === idkey)
                    this.arParticipants.splice(pos, 1)
                    this.pops.run({title: 'Participante eliminado', message: `El participante ha sido eliminado satisfactoriamente de la lista.`})
                    back.out.click()
                    this.table()
                } else {
                    back.out.click()
                }
            }
            if(e.target.classList.contains('btn-ed-table')){
                console.log('editing')
            }
            if(e.target.classList.contains('inp-td-check')){
                const idcheck = e.target.id
                const ch = e.target.checked
                if(ch){
                    this.listChecks.push(idcheck)
                } else {
                    const pos = this.listChecks.indexOf(idcheck)
                    this.listChecks.splice(pos, 1)
                }

                const contBtnDelGroup = this.contTable.querySelector('.part-header-tools-opts')
                this.listChecks.length > 0 ? contBtnDelGroup.classList.remove('oc') : contBtnDelGroup.classList.add('oc')
            }
            if(e.target.id === 'btn_part_header_del_gr'){
                const back = new this.src.BackgroundBlur(document.querySelector('body'))
                let nData;
                this.listChecks.length === 1 ? nData = '1 ingreso' : nData = `${this.listChecks.length} ingresos`
                const textWarn = {
                    title: 'Borrar grupo de datos',
                    body: `Esta a punto de borrar ${nData}. Este paso es irreversible. Si desea continuar con esta acción haga click en "Continuar", de lo contrario haga click en "Cancelar".`
                }
                const warn = await new this.src.Warnings(back.block, this.makeHTML, textWarn)
                if(warn.status){
                    this.listChecks.forEach(ch => {
                        const pos = this.arParticipants.findIndex(dat => dat.id === ch.split('__')[1])
                        this.arParticipants.splice(pos, 1)
                    })
                    this.listChecks = []
                    const contBtnDelGr = this.contTable.querySelector('.part-header-tools-opts')
                    contBtnDelGr.classList.add('oc')
                    this.table()
                    back.out.click()
                } else {
                    back.out.click()
                }


            }
        })
    }
}

const structureTable = (src, dbTable, dbForm, listForms) => {
    const mainContainer = document.querySelector('.main-container')
    new ManageTest(mainContainer, src, dbTable, dbForm, listForms)
    return
}

module.exports = { structureTable }