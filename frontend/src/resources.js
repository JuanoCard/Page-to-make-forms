
class MakeHTML {
    constructor(){}
 
    model(obj){
       const newObj = {
          elem: obj.elem,
          id: obj.id,
          class: obj.class,
          value: obj.value,
          type: obj.type,
          placeholder: obj.placeholder,
          text: obj.text,
          for: obj.for,
          name: obj.name,
          dataset1: obj.dataset1,
          href: obj.href,
          src: obj.src,
          min: obj.min,
          max: obj.max,
          step: obj.step,
          enctype: obj.enctype,
          any: obj.any,
          condition: obj.condition,
          predesing: obj.predesing,
          subs: obj.subs,
       };
 
    return newObj;
    }
 
    create(container, objData, elements){
       const objModel = this.model(objData);
 
       let obj = objModel;
       if (objModel.predesing) {
          obj = Object.assign(objModel, elements[objModel.predesing]);
          delete obj.predesing;
       }
 
       const elem = document.createElement(obj.elem);
       if (obj.id){elem.setAttribute("id", obj.id)}
       if (obj.class){elem.setAttribute("class", obj.class)}
       if (obj.value){elem.setAttribute("value", obj.value)}
       if (obj.type){elem.setAttribute("type", obj.type)}
       if (obj.placeholder){elem.setAttribute("placeholder", obj.placeholder)}
       if (obj.text){elem.append(obj.text)}
       if (obj.for){elem.setAttribute("for", obj.for)}
       if (obj.name){elem.setAttribute("name", obj.name)}
       if (obj.dataset1){elem.setAttribute(obj.dataset1[0], obj.dataset1[1])}
       if (obj.href){elem.setAttribute("href", obj.href)}
       if (obj.src){elem.setAttribute("src", obj.src)}
       if (obj.min){elem.setAttribute("min", obj.min)}
       if (obj.max){elem.setAttribute("max", obj.max)}
       if (obj.step){elem.setAttribute("step", obj.step)}
       if (obj.any){elem.setAttribute(obj.any, "")}
 
       container.appendChild(elem);
       if (obj.subs){obj.subs.forEach((ob) => this.create(elem, ob, elements))}
 
       obj = "";
       return container;
    }
 
    merge(block, mergeData) {
       const arMergeData = Object.keys(mergeData);
       arMergeData.forEach(data => {
          const elemBlock = block.querySelector(`#${data}`);
          const arData = mergeData[data];
          arData.forEach(da => {
             let elemMatch;
             if (da.target[0] === "class") {
                elemMatch = elemBlock.querySelector(`.${da.target[1]}`);
                if(!elemMatch){return}
             }
             if (da.target[0] === "id") {
                elemMatch = elemBlock.querySelector(`#${da.target[1]}`);
                if(!elemMatch){return}
             }
             if (da.attr.class) {
                elemMatch.classList.add(da.attr.class);
             }
             if (da.attr.id) {
                elemMatch.setAttribute("id", da.attr.id);
             }
             if (da.attr.placeholder) {
                elemMatch.setAttribute("placeholder", da.attr.placeholder);
             }
             if (da.attr.text) {
                elemMatch.append(da.attr.text);
             }
             if (da.attr.value) {
                elemMatch.setAttribute('value', da.attr.value);
             }
             if (da.attr.for) {
                elemMatch.setAttribute('for', da.attr.for);
             }
             if (da.attr.dataset1) {
                elemMatch.setAttribute(da.attr.dataset1[0], da.attr.dataset1[1]);
             }
             if (da.attr.checked) {
                elemMatch.checked = da.attr.checked;
             }
          });
       });
 
       return block;
    }
 
    build(container, htmlData, dataElements = undefined) {
       if (htmlData.arrayData.length > 0) {
          let blockHtml;
          htmlData.arrayData.forEach((dat) => {
          blockHtml = this.create(container, dat, dataElements);
          });
          if(htmlData.merge){
             this.merge(blockHtml, htmlData.merge);
          }
       }
 
       return container;
    }
}

class BackgroundBlur {
    blockCB;
 
    constructor(container, cb, objOptions) {
       this.container = container;
       this.cb = cb;
       this.objOptions = objOptions;
       this.background = this.createBackground();
       this.blockCB;
       this.btnOut;
 
       cb ? this.executeCB() : undefined
       return {block: this.blockCB, out: this.btnOut}
    }
 
    createBackground() {
       const back = document.createElement("div");
       back.setAttribute("class", "block-background");
       const contCB = document.createElement("div");
       contCB.setAttribute("class", "cont-cb");
       const btn = document.createElement("button");
       btn.setAttribute("class", "button-out-backdrop");
       back.appendChild(contCB);
       back.appendChild(btn);
 
       this.btnOut = btn;
       this.blockCB = contCB;
       this.container.appendChild(back);
 
       this.btnOut.addEventListener("click", () => {
          this.goOut();
       });
 
       return back;
    }
 
    executeCB() {
       if(this.objOptions){
          this.cb(this.blockCB, this.objOptions)
       } else {
          this.cb(this.blockCB)
       }
    }
 
    goOut() {
       this.container.removeChild(this.background);
    }
}

class Pops {
    constructor(){
       this.container = document.querySelector('body');
       this.contPop;
       this.btnOut;
       this.ar = []
 
       return
    }
    
    run(objCont = undefined){
       const res = this.checkObj(objCont)
       if(!res.status){
          console.warn(res.er)
          this.createPop(undefined)
          return
       }else{
          const contPop = this.container.querySelector('.cont-pop')
          contPop ? this.container.removeChild(contPop) : this.container
          this.createPop(objCont)
          return
       }
    }
 
    checkObj(obj){
       let msn = {status: true, er: undefined}
       if(!obj){
          msn.status = false
          msn.er = 'There are not arguments in the function. The argument must be an object with two properties: {title: String, message: String}'
          return msn
       }else{
          if(!obj.title){
             msn.status = false
             msn.er = 'The object does not have the TITLE property. This must be of type string.'
             return msn
          }else{
             if(!obj.message){
                msn.status = false
                msn.er = 'The object does not have the MESSAGE property. This must be of type string.'
                return msn
             }else{
                msn.status = true
                msn.er = undefined
                return msn
             }            
          }
       }
    }
 
    createPop(obj = undefined){
       const cod = Math.trunc(Math.random() * Math.pow(10, 10)).toString(16)
       this.contPop = document.createElement("div");
       this.contPop.setAttribute("id", `pop__${cod}`);
       this.contPop.setAttribute("class", 'cont-pop fd');
       this.ar.push(`pop__${cod}`)
       
       // message
       let tit;
       let msn;
       !obj ? tit = undefined : tit = obj.title
       !obj ? msn = 'Error: No han sido ingresados todos los parametros de la función.': msn = obj.message
       const contMsn = document.createElement('div')
       contMsn.setAttribute('class', 'cont-pop-text')
       const title = document.createElement('h4')
       title.append(tit)
       const message = document.createElement('p')
       message.append(msn)
       tit ? contMsn.appendChild(title) : tit
       contMsn.appendChild(message)
       this.contPop.appendChild(contMsn)
 
       // buttons
       this.btnOut = document.createElement('button')
       this.btnOut.setAttribute('class', 'button-ic-exit ru10 oc')
       this.contPop.appendChild(this.btnOut)
       this.container.appendChild(this.contPop);
 
       this.actions(`pop__${cod}`)
 
       return
    }
 
    actions(idPop){
       setTimeout(() => {
          const lookfor = this.container.querySelector(`#${idPop}`)
          if(lookfor){
             this.container.removeChild(this.contPop)
          }
       }, 4000);      
 
       this.contPop.addEventListener('mouseover', () => {
          this.btnOut.classList.remove('oc')
       })
 
       this.contPop.addEventListener('mouseout', () => {
          this.btnOut.classList.add('oc')
       })
 
       this.btnOut.addEventListener('click', () => {
          this.container.removeChild(this.contPop)
          return
       })
       return
    }
}

class Placeholders {
   // container -> el div contenedor de los inputs donde se han de pegar los placeholder
   // classInputs -> clase de los inputs donde se pegaran los placeholder
   // text -> (REQUERIDO A NUM) string del contenido del placeholder
   // num -> (OPCIONAL) boolean que determina si se requiere que la funcion le agregue una correlacion numerica. por defecto TRUE

   container
   arInputs

   constructor(){
      this.container;
      this.arInputs;
   }

   print(container, classInputs, text, num = true){
      this.container = container
      this.arInputs = container.querySelectorAll(`.${classInputs}`)
      if(this.arInputs.length > 0){
         for(let i = 0; i < this.arInputs.length; i++){
            if(num){ this.arInputs[i].setAttribute('placeholder', `${text} ${i + 1}`) }
            if(!num){ this.arInputs[i].setAttribute('placeholder', `${text}`) }
         }
      }
   }
}

class DownloadSVG {
    constructor(svgElem){
       console.log(svgElem)
       this.svgElem = svgElem
       this.svg;
 
       this.convertStr()
    }
 
    convertStr(){
       const serialize = new XMLSerializer()
       this.svg = serialize.serializeToString(this.svgElem)
       this.download('png', 'image')
    }
 
    download(format, fileName){
 
       // Create an SVG element from the SVG string
       const svg = new Blob([this.svg], { type: 'image/svg+xml' });
       const url = URL.createObjectURL(svg);
     
       // Create a canvas element to render the SVG
       const canvas = document.createElement('canvas');
       const context = canvas.getContext('2d');
     
       const image = new Image();
       image.onload = function () {
         // Set canvas dimensions to match the image
         canvas.width = image.width;
         canvas.height = image.height;
     
         // Render the SVG onto the canvas
         context.drawImage(image, 0, 0);
     
         // Convert canvas to the desired format
         const dataURL = canvas.toDataURL(`image/${format}`);
         
         // Create a link for download
         const a = document.createElement('a');
         a.href = dataURL;
         a.download = `${fileName}.${format}`;
         a.style.display = 'none';
         document.body.appendChild(a);
     
         // Trigger the download and clean up
         a.click();
         document.body.removeChild(a);
     
         // Release the resources
         URL.revokeObjectURL(url);
       };
     
       image.src = url;
    }
}

class CreateForms{
 
    constructor(container, datahtml, resources, list, controllers){
      this.container = container
      this.contPanel = this.container.querySelector('.panel-body-blocks')
      //  this.contDets;
      //  this.contModel;
      //  this.contList;
       this.formDet;
      //  this.resources = resources
      this.datahtml = datahtml
      // this.data = datahtml.panel
      this.makeHTML = new resources.MakeHTML()
      //  this.controller = new controllers(this.container, this.datahtml, this.resources)
      //  this.list = list
      this.objForm = {name_form: undefined, structure: []}
      this.words = []
      this.placeholder = new resources.Placeholders()
      this.modeform = 'create'
      this.start()
    }
 
    async start(){
       this.contDets = this.contPanel.querySelector('#ops_dets')
       this.contModel = this.contPanel.querySelector('#form_model')
       this.contList = this.container.querySelector('#ul_body_list')
      //  this.printForm()
       this.actions()
      //  this.listForms()
    }
 
    actions(){
       const btnsOpPanel = this.contPanel.querySelectorAll('.btn-op-panel')
       btnsOpPanel.forEach(btn => btn.addEventListener("click", () => {
          const key = btn.id.split('__')[1]
          if(key !== 'select_dList'){
             this.printDets(key)
             this.addRemoveInputs(key)
          } else {
             this.printDets(key)
          }
          return
       }))

       btnsOpPanel[0].click()
       
      //  this.contModel.addEventListener('click', async (e) => {
      //     if(e.target.classList.contains('btn-it-del')){
      //        e.preventDefault()
      //        const idkey = e.target.id.split('__')[1]
      //        const objDel = this.objForm.structure.find(it => it.id === idkey)
      //        const index = this.objForm.structure.indexOf(objDel)
      //        this.objForm.structure.splice(index, 1)
      //        this.printForm()
      //        return
      //     }
          
      //     if(e.target.classList.contains('btn-it-edi')){
      //        e.preventDefault()
      //        const idkey = e.target.id.split('__')[1]
      //        const objDel = this.objForm.structure.find(it => it.id === idkey)
      //        btnsOpPanel.forEach(bt => {
      //           bt.classList.remove('btn-dis')
      //           bt.disabled = false
      //        })
      //        this.printDets(objDel.group, objDel)
      //        this.placeholder.print(this.contDets, 'inp-op', 'Opción')
      //        return
      //     }
 
      //     if(e.target.id === 'btn_cancel_edit_form'){
      //        e.preventDefault()
      //        btnsOpPanel.forEach(bt => {
      //           bt.classList.remove('btn-dis')
      //           bt.disabled = false
      //        })
      //        this.printDets('input_text')
      //        this.objForm = {name_form: undefined, structure: []}
      //        this.modeform = 'create'
      //        this.printForm()
      //        return
      //     }
 
      //     if(e.target.id === 'btn_del_form'){
      //        e.preventDefault()
      //        await this.controller.deleteForms(this.objForm._id)
      //     }
 
      //     if(e.target.id === 'btn_edit_form'){
      //        e.preventDefault()
      //        await this.controller.editForms(this.objForm)
      //        btnsOpPanel.forEach(bt => {
      //           bt.classList.remove('btn-dis')
      //           bt.disabled = false
      //        })
      //        this.printDets('input_text')
      //        this.objForm = {name_form: undefined, structure: []}
      //        this.modeform = 'create'
      //        this.printForm()
      //        this.list = await this.listForms()
      //        return
      //     }
 
      //     if(e.target.id === 'btn_save_create_form'){
      //        e.preventDefault()
      //        await this.controller.saveForms(this.objForm)
      //        this.objForm = {name_form: undefined, structure: []}
      //        this.printForm()
      //        this.list = await this.listForms()
      //        return
      //     }
      //  })
 
      //  this.contList.addEventListener('click', (e) => {
      //     if(e.target.classList.contains('btn-li-form')){
      //        const id = e.target.id
      //        const formChosen = this.list.find(fo => fo._id === id)
      //        btnsOpPanel.forEach(bt => {
      //           bt.classList.add('btn-dis')
      //           bt.disabled = true
      //        })
      //        this.contDets.innerHTML = ''
      //        this.objForm = formChosen
      //        this.modeform = 'edit'
      //        this.printForm()
      //        return
      //     }
      //     e.preventDefault()
      //  })
 
      //  this.contDets.addEventListener('click', (e) => {
      //     if(e.target.classList.contains('btn-add-det')){
      //        e.preventDefault()
      //        const targetkey = e.target.id.split('__')[1]
      //        this.makeArray(targetkey)
      //     }
 
      //     if(e.target.classList.contains('btn-edi-det')){
      //        e.preventDefault()
      //        const targetkey = e.target.id.split('__')[1]
      //        const idIt = e.target.dataset.obj
      //        this.makeArray(targetkey, 'edit', idIt)
      //     }
      //  })
 
       return
    }
 
    listForms(){
       if(this.list){
          this.contList.innerHTML = ''
          this.list.forEach(lis => {
             const btnLi = {
                arrayData: [
                   {elem: 'li', class: 'cont-btn-li-subtit', subs: [
                      {elem: 'button', id: lis._id, class: 'button-li-subtit btn-li-form', subs: [
                         {elem: 'div', class: 'btn-li-subtit-cont', subs: [
                            {elem: 'p', text: lis.name_form},
                            {elem: 'span', text: `Creado el: ${lis.created_at.split('T')[0]}`}
                         ]}
                      ]}
                   ]}
                ]
             }
             this.makeHTML.build(this.contList, btnLi)
          })
       }
 
       return this.llist
    }
 
    printDets(key = undefined, objEdit = undefined){
       if(!key){ return }
 
       this.contDets.innerHTML = ''
       const structureForm = {
          arrayData: [
             {predesing: `panel_form_${key}`}
          ]
       }
       this.makeHTML.build(this.contDets, structureForm, this.datahtml.elements)
       this.formDet = this.contDets.querySelector(`#form__${key}`)
 
       if(key === 'select_dList'){
          const arBtnsDList = this.selectDList()
          arBtnsDList.forEach(btn => btn.addEventListener('click', (e) => {
             this.selectDList(true, btn.id)
             e.preventDefault()
          }))
 
          return
       }
 
       const contBtnDet = this.contDets.querySelector('.cont-btn-form-det')
       let idBtn;
       let textBtn;
       let classBtn;
       let dataBtn;
       if(!objEdit){
          idBtn = `btnadd__${key}`
          textBtn = 'Agregar'
          classBtn = 'button-det-gre btn-add-det'
          dataBtn = ''
       } else {
          idBtn = `btnedi__${key}`
          textBtn = 'Editar'
          classBtn = 'button-det-gre btn-edi-det'
          dataBtn = objEdit.id
       }
       const typeBtnAdd = {
          arrayData: [
             {elem: 'button', id: idBtn, class: classBtn, text: textBtn, dataset1: ['data-obj', dataBtn]}
          ]
       }
 
       this.makeHTML.build(contBtnDet, typeBtnAdd)
 
       if(objEdit){
          const inpEt = this.contDets.querySelector('.fo-inp-et')
          inpEt.value = objEdit.et
 
          if(objEdit.group === 'input_text'){
             const inpsRad = this.contDets.querySelectorAll('.fo-inp-typtex')
             inpsRad.forEach(inp => inp.checked = false)
             const inpcheck = this.contDets.querySelector(`#radio_${objEdit.type}_formdet`)
             inpcheck.checked = true
          }
 
          if(objEdit.group !== 'input_text'){
             const opts = objEdit.options
             this.addRemoveInputs(objEdit.group)
 
             let n = 1
             opts.forEach(op => {
                const contDets = this.formDet.querySelector(`#cont_opts__${objEdit.group}`)
                const inpDet = this.formDet.querySelector(`#inp_detOp${n}`)
                inpDet.value = op.et
                if(n === opts.length){ return }
                const btnadd = contDets.querySelector('.btn-add')
                btnadd.click()
                n++
             })
          }
          
          const inpReq = this.contDets.querySelector('.fo-inp-req')
          objEdit.required ? inpReq.checked = true : inpReq.checked = false
       }
 
       return
    }
 
    addRemoveInputs(key = undefined, contInputsOp = undefined, g = ''){
       if(!this.formDet){return}
 
       let contDetOpts;
       !contInputsOp ? contDetOpts = this.formDet.querySelector(`#cont_opts__${key}`) : contDetOpts = contInputsOp
       console.log(key)
 
       if(contDetOpts){
          this.placeholder.print(contDetOpts, 'inp-op', 'Opción')
          let n = 2
          let b;
          let idText;
          contDetOpts.addEventListener('click', (e) => {
             if(e.target.classList.contains('btn-add')){
                if(key === 'select_dList'){
                   b = `-${g}`
                   idText = `${contDetOpts.dataset.block}__`
                } else {
                   b = ''
                   idText = 'inp_detOp'
                }
                const el = e.target
                const newInput = {
                   arrayData: [
                      {predesing: 'cont_inp_det_op_add', id: `cont_detOp${n}${b}`}
                   ],
                   merge: {
                      [`cont_detOp${n}${b}`]: [
                         {
                            target: ['class', 'input-form-det-op'],
                            attr: {
                               id: `${idText}${n}${b}`, 
                               dataset1: ['data-key', 'opt']
                            }
                         },
                         {
                            target: ['class', 'btn-add'],
                            attr: {
                               id: `btn_detOp${n}${b}`
                            }
                         }
                      ]
                   }
                }
 
                this.makeHTML.build(contDetOpts, newInput, this.datahtml.elements)
                el.setAttribute('class', 'button-ic-remove ic-30 btn-remove')
                n++
                this.placeholder.print(contDetOpts, 'inp-op', 'Opción')
                e.preventDefault()
                return
             }
 
             if(e.target.classList.contains('btn-remove')){
                const elCont = contDetOpts.querySelector(`#cont_${e.target.id.split('_')[1]}`)
                contDetOpts.removeChild(elCont)
                this.placeholder.print(contDetOpts, 'inp-op', 'Opción')
                e.preventDefault()
                return
             }
             
          })
       }
    }
 
    makeArray(targetkey, mode = 'create', idElem = undefined){
       let obj = {options: []}
       obj['group'] = targetkey
       obj['input'] = targetkey.split('_')[0]
       obj['type'] = targetkey.split('_')[1]
 
       const inputs = this.formDet.querySelectorAll('.input-det')
       inputs.forEach(inp => {
          const datakey = inp.dataset.key
          if(datakey === 'typ'){
             if(inp.checked){ obj['type'] = inp.id.split('_')[1] }
             return
          }
          if(datakey === 'et'){
             const concat = inp.value.replace(/\s+/g, '_').toLowerCase()
             const cod = Math.trunc(Math.random() * Math.pow(15, 15)).toString(16)
             obj['id'] = `${cod}`
             obj['concat'] = concat
             obj['et'] = inp.value
             this.words.push(concat)
             return
          }
          if(datakey === 'opt'){
             const concatb = inp.value.replace(/\s+/g, '_')
             let objOpt
             if(targetkey === 'select_dList'){
                objOpt = {et: inp.value, concat: `${inp.id.split('__')[0]}___${concatb.toLowerCase()}`}
                obj['root'] = this.contDets.dataset.root
             } else {
                objOpt = {et: inp.value, concat: concatb.toLowerCase()}
             }
             obj.options.push(objOpt)
             this.words.push(concatb)
             return
          }
          if(datakey === 'req'){
             obj['required'] = inp.checked
             return
          }
          return
       })
 
       if(mode === 'create'){ this.objForm.structure.push(obj) }
       if(mode === 'edit'){
          const indexEl = this.objForm.structure.findIndex(it => it.id === idElem)
          this.objForm.structure.splice(indexEl, 1, obj)
       }
       
       obj = {}
       
       this.formDet.reset()
       this.printForm()
 
       if(targetkey !== 'select_dList'){
          this.printDets(targetkey)
          this.addRemoveInputs(targetkey)
       } else {
          this.printDets(targetkey)
       }
 
       this.placeholder.print(this.contDets, 'inp-op', 'Opción')
       return
    }
 
    selectDList(options = false, id = undefined){
       const ulDList = this.contDets.querySelector('#cont_opts__select_dList')
       const lists = this.objForm.structure.filter(it => it.group === 'select_list')
       if(!options){
          ulDList.innerHTML = ''
          lists.forEach(lis => {
             const btnList = document.createElement('button')
             btnList.setAttribute('id', `btnlist_${lis.id}`)
             btnList.setAttribute('class', 'button-dlist btn-dlist')
             btnList.append(lis.et)
             ulDList.appendChild(btnList)
          })
          return this.contDets.querySelectorAll('.btn-dlist')
       }
 
       if(options){
          ulDList.innerHTML = ''
          const itChosen = lists.find(it => it.id === id.split('_')[1])
          let nn = 0
          itChosen.options.forEach(op => {
             const blockList = {
                arrayData: [
                   {elem: 'div', class: 'dlist-cont-opts', subs: [
                      {elem: 'p', class: 'btn-p-dlist', text: op.et},
                      {elem: 'ul', class: 'cont-opts-dlist', dataset1: ['data-block', op.concat], subs: [
                         {elem: 'li', id: `cont_detOp1-${nn}`, class: 'li-input-det-op', subs: [
                            {elem: 'div', class: 'cont-input-det-op', subs: [
                               {elem: 'input', type: 'text', id: `${op.concat}__1-${nn}`, class: 'input-form-det-op input-det inp-op', dataset1: ['data-key', 'opt']},
                               {elem: 'button', id: `btn_detOp1-${nn}`, class: 'button-ic-add btn-add'}
                            ]}
                         ]}
                      ]}
                   ]}
                ]
             }
             this.makeHTML.build(ulDList, blockList, this.data.elements)
             nn++
          })
          this.contDets.setAttribute('data-root', itChosen.id)
 
          let nnn = 0
          const blockListOpts = this.contDets.querySelectorAll('.cont-opts-dlist')
          blockListOpts.forEach(blck => {
             this.addRemoveInputs('select_dList', blck, nnn)
             nnn++
          })
       }
    }
 
    printForm(){
       this.contModel.innerHTML = ''
       this.makeHTML.build(this.contModel, this.datahtml.model_form)
       const formItems = this.contModel.querySelector('.form-d-body')
       this.objForm.structure.length === 0 ? formItems : formItems.innerHTML = ''
       this.objForm.structure.forEach(it => {
          let req;
          it.required ? req = 'it-req' : req = ''
          let oc;
          it.group === 'input_text' ? oc = 'oc' : oc = ''
          const modelIt = {
             arrayData: [
                {predesing: 'model_li_inputs', id: `li__${it.id}`}
             ],
             merge: {
                [`li__${it.id}`]: [
                   {
                      target: ['class', 'form-d-item-tit'],
                      attr: {
                         class: oc
                      }
                   },
                   {
                      target: ['class', 'p-item-tit'],
                      attr: {
                         text: it.et
                      }
                   },
                   {
                      target: ['class', 'form-d-cont-input'],
                      attr: {
                         id: `inps__${it.id}`,
                         dataset1: ['data-group', it.group]
                      }
                   },
                   {
                      target: ['class', 'form-d-item-back'],
                      attr: {
                         class: req
                      }
                   },
                   {
                      target: ['class', 'form-d-cont-del-edi'],
                      attr: {
                         id: `btns__${it.id}`
                      }
                   }
                ]
             }
          }
          this.makeHTML.build(formItems, modelIt, this.data.elements)
 
          let btnsEdDe = undefined
          if(it.group !== 'select_dList'){
             btnsEdDe = {
                arrayData: [
                   {elem: 'button', id: `del__${it.id}`, class: 'button-ic-delete btn-it-del'},
                   {elem: 'button', id: `edi__${it.id}`, class: 'button-ic-edit btn-it-edi'}
                ]
             }
          } else {
             btnsEdDe = {
                arrayData: [
                   {elem: 'button', id: `del__${it.id}`, class: 'button-ic-delete btn-it-del'},
                ]
             }
 
          }
 
          if(btnsEdDe){
             const contBtnsEdDe = formItems.querySelector(`#btns__${it.id}`)
             this.makeHTML.build(contBtnsEdDe, btnsEdDe)
          }
          
          const formContInputs = this.contModel.querySelector(`#inps__${it.id}`)
          if(it.group === 'input_text'){
             const group_input_text = {
                arrayData: [
                   {elem: 'input', class: 'd-input', type: it.type, placeholder: it.et}
                ]
             }
 
             this.makeHTML.build(formContInputs, group_input_text, this.data.elements)
             return
          }
 
          if(it.group === 'input_radio'){
             it.options.forEach(op => {
                const codOp = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
                const group_input_radio = {
                   arrayData: [
                      {elem: 'input', id: `ra_${codOp}`, class: 'd-input', type: it.type, placeholder: it.et, name: `nam${it.concat}`},
                      {elem: 'label', for: `ra_${codOp}`, text: op.et}
                   ]
                }
 
                this.makeHTML.build(formContInputs, group_input_radio, this.data.elements)
             })
             return
          }
 
          if(it.group === 'input_checkbox'){
             it.options.forEach(op => {
                const codOp = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
                const group_input_check = {
                   arrayData: [
                      {elem: 'input', id: `ch_${codOp}`, class: 'd-input', type: it.type, placeholder: it.et},
                      {elem: 'label', for: `ch_${codOp}`, text: op.et}
                   ]
                }
 
                this.makeHTML.build(formContInputs, group_input_check, this.data.elements)
             })
             return
          }
 
          if(it.group === 'select_list'){
             const codSel = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
             const group_select_list = {
                arrayData: [
                   {elem: 'select', id: `sel_${codSel}`, class: 'd-input'},
                ]
             }
             this.makeHTML.build(formContInputs, group_select_list, this.data.elements)
 
             const contSelectL = this.contModel.querySelector(`#sel_${codSel}`)
             it.options.forEach(op => {
                const option = document.createElement('option')
                option.append(op.et)
                contSelectL.appendChild(option)
             })
             return
          }
 
          if(it.group === 'select_dList'){
             const codSel = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
             const group_select_dList = {
                arrayData: [
                   {elem: 'select', id: `sel_${codSel}`, class: 'd-input'},
                ]
             }
 
             this.makeHTML.build(formContInputs, group_select_dList, this.data.elements)
             return
          }
       })
 
       let btnsForms;
       switch (this.modeform){
          case 'create':
             btnsForms = {
                arrayData: [
                   {elem: 'button', id: 'btn_save_create_form', class: 'button-save',text: 'Finalizar creación de formulario'}
                ]
             }
             break
          
          case 'edit':
             btnsForms = {
                arrayData: [
                   {elem: 'button', class: 'button-cancel', id: 'btn_cancel_edit_form', text: 'Cancelar'},
                   {elem: 'button', class: 'button-delete', id: 'btn_del_form', text: 'Eliminar', dataset1: ['data-key', this.objForm._id]},
                   {elem: 'button', class: 'button-edit', id: 'btn_edit_form', text: 'Editar'}
                ]
             }
             break
       }
       this.makeHTML.build(this.contModel.querySelector('#form_d_btns'), btnsForms)
 
       this.connectSelects()
 
       const contLi = this.contModel.querySelectorAll('.form-d-li')
       const contBtnsDelEdi = this.contModel.querySelectorAll('.form-d-cont-del-edi')
       contLi.forEach(cont => cont.addEventListener('mouseover', () => {
          contBtnsDelEdi.forEach(btns => btns.classList.add('oc'))
          const elBtns = this.contModel.querySelector(`#btns__${cont.id.split('__')[1]}`)
          elBtns.classList.remove('oc')
       }))
 
       const instContModel = this.contPanel.querySelector('#inst_creF_cont_model')
       instContModel.addEventListener('mouseout', () => {
          contBtnsDelEdi.forEach(btns => btns.classList.add('oc'))
       })
 
       return
    }
 
   //  connectSelects(){
   //     const itSelectRoots = this.objForm.structure.filter(it => it.group === 'select_list')
   //     itSelectRoots.forEach(sel => {
   //        const selectRoot = this.contModel.querySelector(`#inps__${sel.id} select`)
   //        selectRoot.addEventListener('change', (e) => {
   //           const valueEt = sel.options.find(se => se.et === e.target.value)
   //           const itSelectTarget = this.objForm.structure.find(it => it.root === sel.id)
   //           if(itSelectTarget){
   //              const selectTarget = this.contModel.querySelector(`#inps__${itSelectTarget.id} select`)
   //              const listOptionsTarget = itSelectTarget.options.filter(it => {return it.concat.includes(valueEt.concat)})
   //              selectTarget.innerHTML = ''
   //              listOptionsTarget.forEach(op => {
   //                 const option = document.createElement('option')
   //                 option.append(op.et)
   //                 selectTarget.appendChild(option)
   //              })
   //           }
   //        })
   //     })
   //  }
}

class PrintForm{
    constructor(container = undefined, dataForm = undefined, makeHTML, datahtml){
       this.container = container
       this.formblock;
       this.dataForm = dataForm
       this.makeHTML = makeHTML
       this.data = datahtml
    }
    
    buildForm(){
       this.container.innerHTML = ''
       const modelForm = {
          arrayData: [
             {predesing: 'model_form'}
          ]
       }
       this.makeHTML.build(this.container, modelForm, this.data.elements)
       this.dataForm ? this.formm() : this.empty()
       return
    }
 
    formm(){
       const formItems = this.container.querySelector('.form-d-body')
       this.dataForm.structure.length === 0 ? formItems : formItems.innerHTML = ''
       this.dataForm.structure.forEach(it => {
          let req;
          it.required ? req = 'it-req' : req = ''
          let oc;
          it.group === 'input_text' ? oc = 'oc' : oc = ''
          const modelIt = {
             arrayData: [
                {predesing: 'form_li_inputs', id: `li__${it.id}`, dataset1: ['data-gr', it.group]}
             ],
             merge: {
                [`li__${it.id}`]: [
                   {
                      target: ['class', 'form-d-item-tit'],
                      attr: {
                         class: oc
                      }
                   },
                   {
                      target: ['class', 'p-item-tit'],
                      attr: {
                         text: it.et
                      }
                   },
                   {
                      target: ['class', 'form-d-cont-input'],
                      attr: {
                         id: `inps__${it.id}`,
                         dataset1: ['data-group', it.group]
                      }
                   },
                   {
                      target: ['class', 'form-d-item-back'],
                      attr: {
                         class: req
                      }
                   }
                ]
             }
          }
          this.makeHTML.build(formItems, modelIt, this.data.elements)
          
          const formContInputs = this.container.querySelector(`#inps__${it.id}`)
          if(it.group === 'input_text'){
             const group_input_text = {
                arrayData: [
                   {elem: 'input', class: 'd-input', type: it.type, placeholder: it.et}
                ]
             }
 
             this.makeHTML.build(formContInputs, group_input_text, this.data.elements)
             return
          }
 
          if(it.group === 'input_radio'){
             it.options.forEach(op => {
                const codOp = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
                const group_input_radio = {
                   arrayData: [
                      {elem: 'input', id: `ra_${codOp}`, class: 'd-input', type: it.type, placeholder: it.et, name: `nam${it.concat}`, dataset1: ['data-key', op.et]},
                      {elem: 'label', for: `ra_${codOp}`, text: op.et}
                   ]
                }
 
                this.makeHTML.build(formContInputs, group_input_radio, this.data.elements)
             })
             return
          }
 
          if(it.group === 'input_checkbox'){
             it.options.forEach(op => {
                const codOp = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
                const group_input_check = {
                   arrayData: [
                      {elem: 'input', id: `ch_${codOp}`, class: 'd-input', type: it.type, placeholder: it.et, dataset1: ['data-key', op.et]},
                      {elem: 'label', for: `ch_${codOp}`, text: op.et}
                   ]
                }
 
                this.makeHTML.build(formContInputs, group_input_check, this.data.elements)
             })
             return
          }
 
          if(it.group === 'select_list'){
             const codSel = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
             const group_select_list = {
                arrayData: [
                   {elem: 'select', id: `sel_${codSel}`, class: 'd-input'},
                ]
             }
             this.makeHTML.build(formContInputs, group_select_list, this.data.elements)
 
             const contSelectL = this.container.querySelector(`#sel_${codSel}`)
             it.options.forEach(op => {
                const option = document.createElement('option')
                option.append(op.et)
                contSelectL.appendChild(option)
             })
             return
          }
 
          if(it.group === 'select_dList'){
             const codSel = Math.trunc(Math.random() * Math.pow(7, 10)).toString(16)
             const group_select_dList = {
                arrayData: [
                   {elem: 'select', id: `sel_${codSel}`, class: 'd-input'},
                ]
             }
 
             this.makeHTML.build(formContInputs, group_select_dList, this.data.elements)
             return
          }
       })
 
       this.connectSelects()
       this.formblock = this.container.querySelector('form')
       return
    }
 
    empty(){
    }
 
    addbtns(typeform = undefined){
       if(!typeform){ return }
 
       let btnsForms;
       if(typeform === 'save'){
          btnsForms = {
             arrayData: [
                {elem: 'button', id: 'btn_save', class: 'button-save',text: 'Guardar datos'}
             ]
          }
       }
       if(typeform === 'edit'){
          btnsForms = {
             arrayData: [
                {elem: 'button', id: 'btn_cancel_form', class: 'button-cancel',text: 'Cancelar'},
                {elem: 'button', id: 'btn_edit_form', class: 'button-edit',text: 'Editar'}
             ]
          }
       }
 
       this.makeHTML.build(this.container.querySelector('#form_d_btns'), btnsForms)
    }
 
    model(){
       this.buildForm()
    }
 
    save(){
       this.buildForm()
       this.addbtns('save')
       return this.formblock
    }
 
    edit(){
       this.buildForm()
       this.addbtns('edit')
    }
 
    connectSelects(){
       const itSelectRoots = this.dataForm.structure.filter(it => it.group === 'select_list')
       itSelectRoots.forEach(sel => {
          const selectRoot = this.container.querySelector(`#inps__${sel.id} select`)
          selectRoot.addEventListener('change', (e) => {
             const valueEt = sel.options.find(se => se.et === e.target.value)
             const itSelectTarget = this.dataForm.structure.find(it => it.root === sel.id)
             if(itSelectTarget){
                const selectTarget = this.container.querySelector(`#inps__${itSelectTarget.id} select`)
                const listOptionsTarget = itSelectTarget.options.filter(it => {return it.concat.includes(valueEt.concat)})
                selectTarget.innerHTML = ''
                listOptionsTarget.forEach(op => {
                   const option = document.createElement('option')
                   option.append(op.et)
                   selectTarget.appendChild(option)
                })
             }
          })
       })
    }
}

class PrintTable {
   constructor(container = undefined, datproc = undefined, dataForm = undefined, dataInst = undefined, data = undefined, resources = undefined, datahtml = undefined, controller = undefined, controlTable = undefined){
      this.container = container
      this.dataproc = datproc
      this.dataForm = dataForm
      this.dataInst = dataInst
      this.data = data
      this.copydata = this.data
      this.resources = resources
      this.makeHTML = new resources.MakeHTML()
      this.datahtml = datahtml
      this.cheader = container.querySelector("#part_header_tools");
      this.ctable = container.querySelector("#part_table_cont");
      this.cfooter = container.querySelector('#part_table_footer')
      if(controller){
         this.controller = controller
      }
      this.pag = {
         rangePag: 20,
         icPages: 1,
         numPage: 1,
         current: 1,
         bottom: 1,
         top: 20
      }
      this.currPart = undefined
      this.controlTable = controlTable

      this.run()
   }
   
   run(){
      this.buildComponents()
      this.activeSearch()
      this.calcPag(this.data)
      this.numberRange(this.data)
      this.choosePage()
      this.assessments()
      return
   }

   refresh(){
      this.buildTable()
      this.activeSearch()
      this.calcPag(this.data)
      this.numberRange(this.data)

      return         
   }

   buildComponents(){
      this.cfooter.innerHTML = ''
      const compFooter = {
         arrayData: [
            {elem: 'div', class: 'part-table-footer-entries', subs: [
               {elem: 'div', class: 'part-footer-entries-input', subs: [
                  {elem: 'input', type: 'number', id: 'part_inp_num', class: 'part-input-number', min: '10', max: '200', step: '10', value: '20'},
                  {elem: 'p', text: 'Items por pagina'}
               ]}
            ]},
            {elem: 'div', class: 'part-table-footer-choose', subs: [
               {elem: 'div', id: 'table_list_pags', class: 'part-footer-choose-arrows'}
            ]},
            {elem: 'div', class: 'part-table-footer-page', subs: [
               {elem: 'div', class: 'part-footer-page-box', subs: [
                  {elem: 'p', text: 'Páginas'},
                  {elem: 'div', id: 'number_page', class: 'part-footer-box-num', text: '1'}
               ]}
            ]}
         ]
      }
      this.makeHTML.build(this.cfooter, compFooter)
      return
   }

   buildTable(data = undefined){
      this.ctable.innerHTML = ''
      const strTable = {
         arrayData: [
            {elem: 'table', class: 'part-table', subs: [
               {elem: 'thead', id: 'part_table_head', class: 'part-table-head', subs: [
                  {elem: 'tr', id: 'part_table_tr', class: 'part-table-tr'}
               ]},
               {elem: 'tbody', id: 'part_table_body', class:'part-table-body'}
            ]}
         ]
      }
      this.makeHTML.build(this.ctable, strTable)
      const trH = this.ctable.querySelector('#part_table_tr')
      
      if(!this.dataForm){ return }
      const structure = this.dataForm.structure

      // head
      const thcheck = document.createElement('th')
      trH.appendChild(thcheck)

      const thn = document.createElement('th')
      thn.append('n°')
      trH.appendChild(thn)

      structure.forEach(it => {
         const th = document.createElement('th')
         const btnth = document.createElement('button')
         btnth.setAttribute('class', 'button-th')
         btnth.setAttribute('data-keyth', it.concat)
         btnth.append(it.et)
         th.appendChild(btnth)
         trH.appendChild(th)
      })

      this.dataproc.instrument_proc.forEach(ins => {
         const thIns = document.createElement('th')
         const btnth = document.createElement('button')
         btnth.setAttribute('class', 'button-th')
         btnth.append(ins.construct)
         thIns.appendChild(btnth)
         trH.appendChild(thIns)
      })

      const thbtns = document.createElement('th')
      thbtns.setAttribute('colspan', '2')
      thbtns.append('Opciones')
      trH.appendChild(thbtns)

      // body
      const tbody = this.ctable.querySelector('#part_table_body')
      for(let i = this.pag.bottom; i <= this.pag.top; i++){
         if(!data[i - 1]){ return }
         const tr = document.createElement('tr')
         tbody.appendChild(tr)
         
         // tds
         const tdcheck = document.createElement('td')
         tdcheck.setAttribute('class', 'td-check')
         const check = document.createElement('input')
         check.setAttribute('type', 'checkbox')
         check.setAttribute('id', `td_check__${data[i - 1]._id}`)
         check.setAttribute('class', 'inp-td-check')
         const ch = this.controlTable.listChecks.some(li => li === `td_check__${data[i - 1]._id}`)
         ch ? check.checked = true : check.checked = false
         tdcheck.appendChild(check)
         tr.appendChild(tdcheck)

         const tdn = document.createElement('td')
         tdn.append(i)
         tr.appendChild(tdn)

         const dataPart = data[i - 1].data_part
         const arDatakey = Object.keys(dataPart)
         arDatakey.forEach(key => {
            const td = document.createElement('td')
            td.append(dataPart[key])
            tr.appendChild(td)
         })

         this.dataproc.instrument_proc.forEach(ins => {
            const tdi = document.createElement('td')
            const assess = data[i - 1].assessments_part
            const codIns = ins.idins
            const matchAssess = assess.find(as => as.idInst === codIns)
            // if(i === 10){
            //    console.log(assess)
            //    console.log(data[i - 1])
            //    console.log(matchAssess)
            // }

            if(!matchAssess){
               const btntdi = document.createElement('button')
               btntdi.setAttribute('id', `contr__${codIns}`)
               btntdi.setAttribute('class', 'button-td-ins btn-tdins')
               btntdi.setAttribute('data-part', data[i - 1]._id)
               btntdi.append(`Evaluar ${ins.construct}`)
               tdi.appendChild(btntdi)
            } else {
               const btnRes = document.createElement('button')
               btnRes.setAttribute('class', 'button-td-insres btn-tdinsres')
               btnRes.append('Evaluado')
               tdi.appendChild(btnRes)
            }

            tr.appendChild(tdi)
         })

         const tdbtns = ['edit', 'delete']
         tdbtns.forEach(op => {
            const tdbtn = document.createElement('td')
            tdbtn.setAttribute('class', 'td-btns')
            const btn = document.createElement('button')
            btn.setAttribute('id', `btn_${op}__${data[i - 1]._id}`)
            btn.setAttribute('class', `button-td-${op} btn-${op}-table`)
            tdbtn.appendChild(btn)
            tr.appendChild(tdbtn)
         })
      }

      return
   }

   assessments(){
      this.ctable.addEventListener('click', (e) => {
         if(e.target.classList.contains('btn-tdins')){
            const btn = e.target
            const keyInst = btn.id.split('__')[1]
            const keyPart = btn.dataset.part
            this.currPart = keyPart
            const strinstrument = this.dataInst.find(ins => ins._id === keyInst)
            const participant = this.data.find(par => par._id === keyPart)
      
            const back = new this.resources.BackgroundBlur(document.querySelector('#header_areas'))
            new areaIns.PrintInstrument(back.block, 'eval', {structure: strinstrument, part: participant, makeHTML: this.makeHTML, datahtml: this.datahtml.dbins, controller: this.controller, out: back.out})
            
            return
         }
      })
   }

   activeSearch(){
      this.ctable.addEventListener('click', (e) => {
         if(e.target.classList.contains('button-th')){
            const fieldkey = e.target.dataset.keyth
            this.inputSearch(fieldkey)
         }
      })
      this.inputSearch()
   }

   inputSearch(field = undefined) {
      const inp = this.cheader.querySelector("#input_search_table");

      inp.addEventListener("input", (e) => {
         const tex = e.target.value.trim().toLowerCase();
         this.filterlist(tex);
         this.calcPag(this.copydata)
         this.numberRange(this.copydata)
         this.pag.current = 1
         this.cfooter.querySelector('#number_page').innerHTML = 1
      })
   }

   filterlist(tex, field) {
      let res = [];
      for (let i = 0; i < this.data.length; i++) {
         const { nombres } = this.data[i].data_part;
         if(nombres.toString().toLowerCase().indexOf(tex) >= 0) {
            res.push(this.data[i]);
         }
      }
      this.copydata = [...res];
   }

   calcPag(dat = undefined){
      const numRange = this.cfooter.querySelector('#part_inp_num').value
      this.pag.rangePag = Math.round(parseInt(numRange))
      this.pag.icPages = Math.ceil(dat.length / this.pag.rangePag)
      if(this.pag.current > this.pag.icPages){
         this.pag.current = this.pag.icPages
         this.cfooter.querySelector('#number_page').innerHTML = this.pag.current
      } else {
         this.pag.current
      }
      this.pag.bottom = ((this.pag.current - 1) * this.pag.rangePag) + 1
      this.pag.top = this.pag.current * this.pag.rangePag

      this.buildTable(dat)
      this.printNumPage()
   }

   printNumPage(){
      const contChoosePag = this.cfooter.querySelector('#table_list_pags')
      contChoosePag.innerHTML = ''
      const btn_left = document.createElement('button')
      btn_left.setAttribute('class', 'button-arrow-l btn-pag-l')
      const btn_right = document.createElement('button')
      btn_right.setAttribute('class', 'button-arrow-r btn-pag-r')
      
      const npages = this.pag.icPages
      const cur = this.pag.current
      const dis = 1
      let dow = cur - dis
      let up = cur + dis
      if(dow <= 0){ up = cur + dis + 1 }
      if(npages >= 4){
         for(let i = 1; i <= npages; i++){
            let btn_num = document.createElement('button')
            btn_num.setAttribute('class', 'button-num-foottable btn-n-foot')

            if(i < dow){
               contChoosePag.appendChild(btn_left)
            }
            if(i >= dow && i <= up){
               btn_num.setAttribute('data-num', i)
               btn_num.append(i)
               contChoosePag.appendChild(btn_num)
            }
            if(i > up){
               contChoosePag.appendChild(btn_right)
            }

         }
      } else {
         for(let i = 1; i <= npages; i++){
            let btn_num = document.createElement('button')
            btn_num.setAttribute('class', 'button-num-foottable btn-n-foot')
            btn_num.setAttribute('data-num', i)
            btn_num.append(i)
            contChoosePag.appendChild(btn_num)            
         }
      }

      return
   }

   numberRange(dat = undefined){
      const inpNumIt = this.cfooter.querySelector('#part_inp_num')
      inpNumIt.addEventListener('change', (e) => {
         const num = parseInt(e.target.value)
         const roundNum = Math.round(num / 10) * 10
         inpNumIt.value = roundNum
         this.pag.current = 1
         this.calcPag(dat)
      })
      
      return
   }

   choosePage(){
      this.cfooter.addEventListener('click', (e) => {
         if(e.target.classList.contains('btn-n-foot')){
            this.pag.current = parseInt(e.target.dataset.num)
            this.cfooter.querySelector('#number_page').innerHTML = e.target.dataset.num
            this.calcPag(this.copydata)

            return
         }

         if(e.target.classList.contains('btn-pag-l')){
            this.pag.current = this.pag.current - 1
            this.cfooter.querySelector('#number_page').innerHTML = this.pag.current
            this.calcPag(this.copydata)
            this.buildTable(this.copydata)
            
            return
         }

         if(e.target.classList.contains('btn-pag-r')){
            this.pag.current = this.pag.current + 1
            this.cfooter.querySelector('#number_page').innerHTML = this.pag.current
            this.calcPag(this.copydata)
            this.buildTable(this.copydata)

            return
         }
      })
   }
}

module.exports = { MakeHTML, BackgroundBlur, Pops, Placeholders, DownloadSVG, CreateForms, PrintForm, PrintTable }