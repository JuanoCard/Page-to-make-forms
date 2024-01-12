
class BarsHoriz{
    // container = REQUERIDO, contenedor HTML donde ira alojado el SVG
    // arData = REQUERIDO, obj tipo: {<key>: <value>}
    constructor(container, structureData){
       this.cont = container
       this.str = structureData
       this.ar;
       this.svg;
       this.def;
       this.contSel;
       this.contGraph;
       this.mm = {
          h: 0,
          w: 0,
          hB: 0,
          xi: 0,
          yi: 0,
          yf: 0,
          l: 0,
          r: 0,
          rz: 0,
          t: 0,
          lr: 0,
          dis: 0,
          xn: 0
       }
       this.current = structureData[0].concat
    }
 
    static(arData){
       this.ar = arData
       this.buildHTML()
 
       return
    }
 
    dinamic(arData){
       this.ar = arData
       this.buildHTML('dinamic')
       this.createSelect()
       this.actions()
       this.createSVG()
 
       return
    }
 
    buildHTML(typ = 'single'){
       this.contGraph = document.createElement('div')
       this.contGraph.setAttribute('class', 'cont-grph-svg-barH')
 
       if(typ === 'single'){
          this.cont.appendChild(this.contGraph)
          return
       }
       if(typ === 'dinamic'){
          this.contSel = document.createElement('div')
          this.contSel.setAttribute('class', 'cont-sel-svg-barH')
          this.cont.appendChild(this.contSel)
          this.cont.appendChild(this.contGraph)
          return
       }
 
       return
    }
 
    createSelect(){
       this.selec = document.createElement('select')
       this.str.forEach(it => {
          let op = document.createElement('option')
          op.setAttribute('value', it.concat)
          op.append(it.et)
          this.selec.append(op)
       })
       this.contSel.appendChild(this.selec)
 
       return
    }
 
    createSVG(){
       this.contGraph.innerHTML = ''
 
       this.mm.h = this.contGraph.clientHeight
       this.mm.w = this.contGraph.clientWidth
       if(this.mm.h <= 0 && this.mm.w <= 0){return}
 
       const arFiltered = this.ar.map(it => it[this.current].toString())
       const objData = this.arfrec(arFiltered)
       this.mm.hB = 34,
       this.mm.xi = 10,
       this.mm.yi = 10,
       this.mm.yf = 10 + 34, //yi + hB,
       this.mm.l = this.mm.w - 50,
       this.mm.r = 4,
       this.mm.rz = 1.7909,
       this.mm.t = Object.values(objData).reduce((a, b) => a + b),
       this.mm.lr = 0,
       this.mm.dis = 0
       const color = {
          norm: {
             cBar: '#4ee5ef', 
             cLin: '#1EAAB4', 
             cTex: '#09436C'
          },
          dang:{
             cBar: '#f15f97', 
             cLin: '#ca0d55', 
             cTex: '#5c0728'
          }
       }
 
       this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
       this.svg.setAttribute('width', this.mm.w)
       this.svg.setAttribute('height', this.mm.h)
       this.svg.setAttribute('viewBox', `0 0 ${this.mm.w} ${this.mm.h}`)
       this.svg.setAttribute('fill', 'none')
       this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
       this.contGraph.appendChild(this.svg)
 
       let ar_keys = Object.keys(objData)
       let n = 0
       ar_keys.forEach(a => {
          a !== 'sin_datos' ? this.printBars(objData, a, n, color.norm) : objData['sin_datos'] > 0 ? this.printBars(objData, a, n, color.dang) : ''
          n++
       })
 
       return
    }
 
    arfrec(ar){
       let frec = {}
       let n = 0
       ar.forEach(a => {a ? frec[a] = frec[a] + 1 || 1 : n++})
       frec['sin_datos'] = n
       return frec
    }
    
    printBars(ar, el, n, color){
       let {hB, xi, yi, yf, l, r, rz, t, lr, dis} = this.mm
       const {cBar, cLin, cTex} = color
       n > 0 ? dis = 7 : dis = 0
       let xn = (hB + dis) * n
       this.mm.xn = xn
       
       // barra de fondo
       lr = l + xi
       this.mm.lr = lr
       let bc_fondo = document.createElementNS('http://www.w3.org/2000/svg', 'path')
       let p_fondo = `M${xi} ${yi + xn}H${lr - r}C${lr - rz} ${yi + xn} ${lr} ${yi + xn + rz} ${lr} ${yi + xn + r}V${hB + xn + 6}C${lr} ${yf + xn - rz} ${lr - rz} ${yf + xn} ${lr - r} ${yf + xn}H${xi}V${yi + xn}Z`
       bc_fondo.setAttribute('d', p_fondo)
       bc_fondo.setAttribute('fill', '#efefef')
       this.svg.appendChild(bc_fondo)
       
       // barra de datos
       lr = Math.round(ar[el] * l / t) + xi
       let g_filter = document.createElementNS('http://www.w3.org/2000/svg', 'g')
       g_filter.setAttribute('filter', `url(#filter${n}_d_804_5)`)
       let bar_dato = document.createElementNS('http://www.w3.org/2000/svg', 'path')
       let p_dato = `M${xi} ${yi + xn}H${lr - r}C${lr - rz} ${yi + xn} ${lr} ${yi + xn + rz} ${lr} ${yi + xn + r}V${hB + xn + 6}C${lr} ${yf + xn - rz} ${lr - rz} ${yf + xn} ${lr - r} ${yf + xn}H${xi}V${yi + xn}Z`
       bar_dato.setAttribute('d', p_dato)
       bar_dato.setAttribute('fill', cBar)
       g_filter.appendChild(bar_dato)
       this.svg.appendChild(g_filter)
 
       // linea de inicio
       let linea = document.createElementNS('http://www.w3.org/2000/svg', 'line')
       linea.setAttribute('x1', xi)
       linea.setAttribute('y1', yi + xn)
       linea.setAttribute('x2', xi)
       linea.setAttribute('y2', yi + hB + xn)
       linea.setAttribute('stroke', cLin)
       linea.setAttribute('stroke-width', 2)
       this.svg.appendChild(linea)
 
       // texto
       const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
       text.setAttributeNS(null, 'x', xi + 10)
       text.setAttributeNS(null, 'y', yi + xn + (hB / 2) + 5)
       text.setAttributeNS(null, 'fill', cTex)
       text.setAttributeNS(null, 'font-family', 'roboto-regular')
       text.setAttributeNS(null, 'font-size', '15')
       text.setAttributeNS(null, 'text-anchor', 'start')
       text.append(document.createTextNode(el))
       this.svg.appendChild(text)    
 
       // porcentaje
       const percentage = document.createElementNS('http://www.w3.org/2000/svg', 'text')
       percentage.setAttributeNS(null, 'x', xi + l - 20)
       percentage.setAttributeNS(null, 'y', yi + xn + (hB / 2) + 5)
       percentage.setAttributeNS(null, 'fill', cTex)
       percentage.setAttributeNS(null, 'font-family', 'roboto-regular')
       percentage.setAttributeNS(null, 'font-size', '15')
       percentage.setAttributeNS(null, 'text-anchor', 'end')
       let por = ar[el] / t * 100
       percentage.append(document.createTextNode(`${por.toFixed(1)}%`))
       this.svg.appendChild(percentage)    
 
       // defs
       this.fDefs(n)
 
       return
    }
 
    fDefs(n){
       this.def = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
       let fil = document.createElementNS('http://www.w3.org/2000/svg', 'filter')
       fil.setAttribute('id', `filter${n}_d_804_5`)
       fil.setAttribute('x', this.mm.xi)
       fil.setAttribute('y', this.mm.yi + this.mm.xn)
       fil.setAttribute('width', this.mm.lr)
       fil.setAttribute('height', 54)
       fil.setAttribute('filterUnits', 'userSpaceOnUse')
       fil.setAttribute('color-interpolation-filters', 'sRGB')
 
       let feFlood = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood')
       feFlood.setAttribute('flood-opacity', 0)
       feFlood.setAttribute('result', 'BackgroundImageFix')
       let feColorMatrix1 = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix')
       feColorMatrix1.setAttribute('in', 'SourceAlpha')
       feColorMatrix1.setAttribute('type', 'matrix')
       feColorMatrix1.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0')
       feColorMatrix1.setAttribute('result', 'hardAlpha')
       let feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset')
       let feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur')
       feGaussianBlur.setAttribute('stdDeviation', '5')
       let feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite')
       feComposite.setAttribute('in2', 'hardAlpha')
       feComposite.setAttribute('operator', 'out')
       let feColorMatrix2 = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix')
       feColorMatrix2.setAttribute('type', 'matrix')
       feColorMatrix2.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0')
       let feBlend1 = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend')
       feBlend1.setAttribute('mode', 'normal')
       feBlend1.setAttribute('in2', 'BackgroundImageFix')
       feBlend1.setAttribute('result', 'effect1_dropShadow_802_3')
       let feBlend2 = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend')
       feBlend2.setAttribute('mode', 'normal')
       feBlend2.setAttribute('in', 'SourceGraphic')
       feBlend2.setAttribute('in2', 'effect1_dropShadow_802_3')
       feBlend2.setAttribute('result', 'shape')
 
       fil.appendChild(feFlood)
       fil.appendChild(feColorMatrix1)
       fil.appendChild(feOffset)
       fil.appendChild(feGaussianBlur)
       fil.appendChild(feComposite)
       fil.appendChild(feColorMatrix2)
       fil.appendChild(feBlend1)
       fil.appendChild(feBlend2)
       this.def.appendChild(fil)
       this.svg.appendChild(this.def)
 
       return
    }
 
    actions(){
       if(this.current){
          for(let i = 0; i < this.selec.options.length; i++){
             if(this.selec.options[i].value === this.current){
                this.selec.options[i].selected = true
                this.createSVG()
             }
          }
       }
       if(this.selec){
          this.selec.addEventListener('change', (e) => {
             this.current = e.target.value
             this.createSVG()
             // let ar_datos =  this.ar.map(a => a[selec.value])
             // let arr = this.arfrec(ar_datos)
             // this.createSVG(cont_bars, arr)
          })
          
          return
       }
    }
}