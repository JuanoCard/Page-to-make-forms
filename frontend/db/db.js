export const home = {
    arrayData: [
        {elem: 'div', class: 'home-container', subs: [
            {elem: 'header', class: 'home-header', subs: [
                {elem: 'div', class: 'cont-logo'}
            ]},
            {elem: 'main', class: 'home-body', subs: [
                {elem: 'div', class: 'cont-body-image', subs: [
                    {elem: 'div', class: 'cont-image'}
                ]},
                {elem: 'div', class: 'cont-body-text-btn', subs: [
                    {elem: 'div', class: 'cont-body-text', subs: [
                        {elem: 'p', text: 'Crea tus formulario de manera  rápida y sencilla'},
                        {elem: 'p', text: 'Aplica tus formularios y analiza los datos obtenidos'}
                    ]},
                    {elem: 'div', class: 'cont-body-btn', subs: [
                        {elem: 'button', id: 'start_create',  class: 'button-red', text: 'Empezar a crear'}
                    ]}
                ]}
            ]}
        ]}
    ]
}

export const makeForm = {
   panel: {
        arrayData: [
            {elem: 'div', class: 'container-panel', subs: [
                {elem: 'div', class: 'panel-header', subs: [
                    {elem: 'div', class: 'cont-logo', subs: [
                        {elem: 'button', id: 'create_back_home', class: 'logo head-logo'}
                    ]}
                ]},
                {elem: 'main', class: 'panel-body', subs: [
                    {elem: 'div', class: 'panel-body-description', subs: [
                        {elem: 'div', class: 'desc-tit', subs: [
                           {elem: 'h3', text: 'Agrega nuevos inputs:'},
                        ]},
                        {elem: 'div', class: 'desc-ins', subs: [
                           {elem: 'p', text: 'En este campo puedes agregar nuevos inputs al modelo del formulario que se encuentra en la parte central del panel de abajo. Tienes opciones para agregar inputs para textos, de opción múltiple, de opción única, listas independientes y listas dependientes. Cada vez que uno de los tipos de inputs del lado izquierdo del bloque de inputs aparecerá un cuadro que te permitirá configurar los detalles del input que deseas agregar. Una vez que lo hiciste dale en el boton “añadir” '}
                        ]},
                        {elem: 'div', class: 'cont-btn-test', subs: [
                           {elem: 'button', class: 'button-red', text: 'Probar formulario'}
                        ]}
                    ]},
                    {elem: 'div', class: 'panel-body-blocks', subs: [
                        {elem: 'div', class: 'panel-block-options', subs: [
                           {elem: 'div', class: 'block-options', subs: [
                              {elem: 'header', class: 'header-options', subs: [
                                  {elem: 'h4', text: 'Opciones de inputs'},
                                  {elem: 'p', text: 'Elije la opción que consideres necesaria para la creación de tu formulario'}
                              ]},
                              {elem: 'div', class: 'body-options', subs: [
                                  {elem: 'ul', id: 'ul_inst_creF_panel_opt', class: 'ops-list', subs: [
                                     {elem: 'li', class: 'li-op', subs: [
                                        {elem: 'button', id: 'btnPanel__input_text', class: 'button-op-inp btn-op-panel', subs: [
                                           {elem: 'div', class: 'ic-op ic-28 ic-tex'},
                                           {elem: 'p', text: 'Texto'}
                                       ]}
                                     ]},
                                     {elem: 'li', class: 'li-op', subs: [
                                       {elem: 'button', id: 'btnPanel__input_radio', class: 'button-op-inp btn-op-panel', subs: [
                                          {elem: 'div', class: 'ic-op ic-28 ic-rad'},
                                          {elem: 'p', text: 'Opción única'}
                                      ]}
                                     ]},
                                     {elem: 'li', class: 'li-op', subs: [
                                       {elem: 'button', id: 'btnPanel__input_checkbox', class: 'button-op-inp btn-op-panel', subs: [
                                          {elem: 'div', class: 'ic-op ic-28 ic-che'},
                                          {elem: 'p', text: 'Op. múltiples'}
                                      ]}
                                     ]},
                                     {elem: 'li', class: 'li-op', subs: [
                                       {elem: 'button', id: 'btnPanel__select_list', class: 'button-op-inp btn-op-panel', subs: [
                                          {elem: 'div', class: 'ic-op ic-28 ic-lis'},
                                          {elem: 'p', text: 'Lista'}
                                      ]}
                                     ]},
                                     {elem: 'li', class: 'li-op', subs: [
                                       {elem: 'button', id: 'btnPanel__select_dList', class: 'button-op-inp btn-op-panel', subs: [
                                          {elem: 'div', class: 'ic-op ic-28 ic-lde'},
                                          {elem: 'p', text: 'Dependientes'}
                                      ]}
                                     ]},
                                  ]},
                                  {elem: 'div', id: 'ops_dets', class: 'ops-dets'}
                              ]},
                           ]}
                        ]},
                        {elem: 'div', class: 'panel-block-model', subs: [
                           {elem: 'div', class: 'block-model', subs: [
                              {elem: 'div', id: 'form_model', class: 'form-model'}
                           ]}
                        ]},
                        {elem: 'div', class: 'panel-block-list', subs: [
                           {elem: 'div', class: 'block-list', subs: [
                              {elem: 'header', class: 'header-options', subs: [
                                  {elem: 'h4', text: 'Lista de formularios'}
                              ]},
                              {elem: 'ul', id: 'ul_body_list', class: 'body-list'}
                           ]}
                        ]}
                    ]}
                ]}
            ]}
        ]
   },

   model_form: {
      arrayData: [
         {elem: 'form', class: 'form-d', subs: [
            {elem: 'header', class: 'form-d-header', subs: [
               {elem: 'h4', text: 'Formulario de Datos'}
            ]},
            {elem: 'ul', class: 'form-d-body', subs: [
               {elem: 'div', class: 'form-d-empty', subs: [
                  {elem: 'p', text: 'Los inputs que vayas a crear aparecerán en este lugar'}
               ]}
            ]},
            {elem: 'div', id: 'form_d_btns', class: 'form-d-btns'}
         ]}
   ]},

   elements: {
       btn_li_subtit: {elem: 'li', class: 'cont-btn-li-subtit', subs: [
          {elem: 'button', class: 'button-li-subtit', subs: [
             {elem: 'div', class: 'btn-li-subtit-cont', subs: [
                {elem: 'p', text: 'Proceso uno de todos los procesos que hay en el mundo de los negocios'},
                {elem: 'span', text: 'Creado el 15 de Ago de este año'}
             ]}
          ]}
       ]},
       btns_start: {elem: 'div', class: 'cont-btn-start', subs: [
          {elem: 'button', class: 'button-start', text: 'Empezar'}
       ]},
       item_formData_emptylist: {elem: 'li', class: 'cont-btn-li-easy-empty', subs: [
          {elem: 'p', class: 'p-li-list', text: 'No ha sido creado ningún Formulario de Datos aún'},
       ]}, 
       input_text_formpanel: {elem: 'div', class: 'form-block', subs: [
          {elem: 'p', class: 'formpanel-input-tit'},
          {elem: 'div', class: 'formpanel-cont-input', subs: [
             {elem: 'input', type: 'text', class: 'formpanel-input-text'}
          ]}
       ]},
       btn_go_out: {elem: 'div', class: 'cont-btn-exit', subs: [
          {elem: 'button', class: 'button-exit'}
       ]},
       panel_form_input_text: {elem: 'div', class: 'cont-form-det', subs: [
          {elem: 'form', id: 'form__input_text', class: 'form-det', subs: [
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Etiqueta del input'}
                ]},
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'input', type: 'text', class: 'inp-det-text input-det fo-inp-et', placeholder: 'Ej. Nombres y Apellidos', dataset1: ['data-key', 'et']}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Definir tipo de input'}
                ]},
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'div', class: 'cont-input-radio-det', subs: [
                      {elem: 'input', type: 'radio', id: 'radio_text_formdet', class: 'input-radio-form-det input-det fo-inp-typtex', name: 'input-radio-det', dataset1: ['data-key', 'typ'], any: 'checked'},
                      {elem: 'label', for: 'radio_text_formdet', text: 'Texto'}
                   ]},
                   {elem: 'div', class: 'cont-input-radio-det', subs: [
                      {elem: 'input', type: 'radio', id: 'radio_email_formdet', class: 'input-radio-form-det input-det fo-inp-typtex', name: 'input-radio-det', dataset1: ['data-key', 'typ']},
                      {elem: 'label', for: 'radio_email_formdet', text: 'Correo'}
                   ]},
                   {elem: 'div', class: 'cont-input-radio-det', subs: [
                      {elem: 'input', type: 'radio', id: 'radio_number_formdet', class: 'input-radio-form-det input-det fo-inp-typtex', name: 'input-radio-det', dataset1: ['data-key', 'typ']},
                      {elem: 'label', for: 'radio_number_formdet', text: 'Número'}
                   ]},
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'div', class: 'cont-input-check-det', subs: [
                      {elem: 'input', type: 'checkbox', id: 'check_required_form_det', class: 'input-check-form-det input-det fo-inp-req', dataset1: ['data-key', 'req']},
                      {elem: 'label', for: 'check_required_form_det', text: 'Convertir en campo obligatorio'}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-btn-form-det'}
             ]}
          ]}
       ]},
       panel_form_input_radio: {elem: 'div', class: 'cont-form-det', subs: [
          {elem: 'form', id: 'form__input_radio', class: 'form-det', subs: [
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Etiqueta del input'}
                ]},
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'input', type: 'text', class: 'inp-det-text input-det fo-inp-et', placeholder: 'Ej. Estado civil', dataset1: ['data-key', 'et']}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Agregar opciones'}
                ]},
                {elem: 'ul', id: 'cont_opts__input_radio', class: 'cont-inp-det-text h-cont-det', subs: [
                   {elem: 'li', id: 'cont_detOp1', class: 'li-input-det-op', subs: [
                      {elem: 'div', class: 'cont-input-det-op', subs: [
                         {elem: 'input', type: 'text', id: 'inp_detOp1', class: 'inp-det-text-bt  input-det inp-op', dataset1: ['data-key', 'opt']},
                         {elem: 'button', id: 'btn_detOp1', class: 'button-ic-add ic-30 btn-add'}
                      ]}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'div', class: 'cont-input-check-det', subs: [
                      {elem: 'input', type: 'checkbox', id: 'check_required_form_det', class: 'input-check-form-det input-det fo-inp-req', dataset1: ['data-key', 'req']},
                      {elem: 'label', for: 'check_required_form_det', text: 'Convertir en campo obligatorio'}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-btn-form-det'}
             ]}
          ]}
       ]},
       panel_form_input_checkbox: {elem: 'div', class: 'cont-form-det', subs: [
          {elem: 'form', id: 'form__input_checkbox', class: 'form-det', subs: [
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Etiqueta del input'}
                ]},
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'input', type: 'text', class: 'inp-det-text input-det fo-inp-et', placeholder: 'Ej. Deportes favoritos', dataset1: ['data-key', 'et']}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Agregar opciones'}
                ]},
                {elem: 'ul', id: 'cont_opts__input_checkbox', class: 'cont-inp-det-text h-cont-det', subs: [
                   {elem: 'li', id: 'cont_detOp1', class: 'li-input-det-op', subs: [
                      {elem: 'div', class: 'cont-input-det-op', subs: [
                         {elem: 'input', type: 'text', id: 'inp_detOp1', class: 'inp-det-text-bt  input-det inp-op', dataset1: ['data-key', 'opt']},
                         {elem: 'button', id: 'btn_detOp1', class: 'button-ic-add ic-30 btn-add'}
                      ]}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'div', class: 'cont-input-check-det', subs: [
                      {elem: 'input', type: 'checkbox', id: 'check_required_form_det', class: 'input-check-form-det input-det fo-inp-req', dataset1: ['data-key', 'req']},
                      {elem: 'label', for: 'check_required_form_det', text: 'Convertir en campo obligatorio'}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-btn-form-det'}
             ]}
          ]}
       ]},
       panel_form_select_list: {elem: 'div', class: 'cont-form-det', subs: [
          {elem: 'form', id: 'form__select_list', class: 'form-det', subs: [
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Etiqueta del input'}
                ]},
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'input', type: 'text', class: 'inp-det-text input-det fo-inp-et', placeholder: 'Ej. País de origen', dataset1: ['data-key', 'et']}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Agregar opciones'}
                ]},
                {elem: 'ul', id: 'cont_opts__select_list', class: 'cont-inp-det-text h-cont-det', subs: [
                   {elem: 'li', id: 'cont_detOp1', class: 'li-input-det-op', subs: [
                      {elem: 'div', class: 'cont-input-det-op', subs: [
                         {elem: 'input', type: 'text', id: 'inp_detOp1', class: 'inp-det-text-bt  input-det inp-op', dataset1: ['data-key', 'opt']},
                         {elem: 'button', id: 'btn_detOp1', class: 'button-ic-add ic-30 btn-add'}

                      ]}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'div', class: 'cont-input-check-det', subs: [
                      {elem: 'input', type: 'checkbox', id: 'check_required_form_det', class: 'input-check-form-det input-det fo-inp-req', dataset1: ['data-key', 'req']},
                      {elem: 'label', for: 'check_required_form_det', text: 'Convertir en campo obligatorio'}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-btn-form-det'}
             ]}
          ]}
       ]},
       panel_form_select_dList: {elem: 'div', class: 'cont-form-det', subs: [
          {elem: 'form', id: 'form__select_dList', class: 'form-det', subs: [
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Etiqueta del input'}
                ]},
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'input', type: 'text', class: 'inp-det-text input-det fo-inp-et', placeholder: 'Ej. Estudios superiores', dataset1: ['data-key', 'et']}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-tit-form-det', subs: [
                   {elem: 'h5', text: 'Agregar opciones'}
                ]},
                {elem: 'ul', id: 'cont_opts__select_dList', class: 'cont-inp-det-text h-cont-det'}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-input-form-det', subs: [
                   {elem: 'div', class: 'cont-input-check-det', subs: [
                      {elem: 'input', type: 'checkbox', id: 'check_required_form_det', class: 'input-check-form-det input-det fo-inp-req', dataset1: ['data-key', 'req']},
                      {elem: 'label', for: 'check_required_form_det', text: 'Convertir en campo obligatorio'}
                   ]}
                ]}
             ]},
             {elem: 'div', class: 'block-form-det', subs: [
                {elem: 'div', class: 'cont-btn-form-det'}
             ]}
          ]}
       ]},
       cont_inp_det_op_add: {elem: 'li', class: 'li-input-det-op', subs: [
          {elem: 'div', class: 'cont-input-det-op', subs: [
             {elem: 'input', type: 'text', class: 'inp-det-text-bt input-det inp-op'},
             {elem: 'button', class: 'button-ic-add ic-30 btn-add'}
          ]}
       ]},
      //  model_li_inputs: {elem: 'li', class: 'form-d-li', subs: [
      //     {elem: 'div', class: 'form-d-item-back', subs: [
      //        {elem: 'div', class: 'form-d-item-tit', subs: [
      //           {elem: 'p', class: 'p-item-tit'}
      //        ]},
      //        {elem: 'div', class: 'form-d-cont-input-btns', subs: [
      //           {elem: 'div', class: 'form-d-cont-input'},
      //           {elem: 'div', class: 'form-d-cont-del-edi oc'}
      //        ]}
      //     ]}
      //  ]},
       model_li_inputs: {elem: 'li', class: 'form-d-li', subs: [
          {elem: 'div', class: 'form-d-item-back', subs: [
             {elem: 'div', class: 'form-d-item-tit', subs: [
                {elem: 'p', class: 'p-item-tit'}
             ]},
             {elem: 'div', class: 'cont-inp-f cont-inp-form', subs: [
               {elem: 'div', class: 'cont-inp-req', subs: [
                  {elem: 'span', class: 'el-req'}
               ]},
               {elem: 'div', class: 'cont-inp-elem'},
               {elem: 'div', class: 'cont-inp-opts', subs: [
                  {elem: 'div', class: 'cont-btns-op'}
               ]}
             ]}
          ]}
       ]},
       form_li_inputs: {elem: 'li', class: 'form-d-li it-form', subs: [
          {elem: 'div', class: 'form-d-item-back', subs: [
             {elem: 'div', class: 'form-d-item-tit', subs: [
                {elem: 'p', class: 'p-item-tit'}
             ]},
             {elem: 'div', class: 'form-d-cont-input-btns', subs: [
                {elem: 'div', class: 'form-d-cont-input'}
             ]}
          ]}
       ]},
       panel_input_level: {elem: 'form', class: 'inputdata-form-input-description', subs: [
          {elem: 'div', class: 'inputdata-cont-btns-level'},
          {elem: 'div', class: 'inputdata-cont-input-level', subs: [
             {elem: 'input', type: 'text', id: 'inputdata_level_name', placeholder: `Nombre`},
          ]}, 
          {elem: 'div', class: 'inputdata-cont-description-level', subs: [
             {elem: 'textarea', id: 'inputdata_level_description', placeholder: `Descripción`}
          ]},
          {elem: 'div', class: 'inputdata-cont-btn-oper', subs: [
             {elem: 'button', id: 'cancel_level', class: 'button-cancel', text: 'Cancelar'},
             {elem: 'button', class: 'button-save btn-save-level', text: 'Guardar'}
          ]}
       ]},
       panel_input_level_ed: {elem: 'form', class: 'inputdata-form-input-description', subs: [
          {elem: 'div', class: 'inputdata-cont-btns-level'},
          {elem: 'div', class: 'inputdata-cont-input-level', subs: [
             {elem: 'input', type: 'text', id: 'inputdata_level_name', placeholder: `Nombre`},
          ]}, 
          {elem: 'div', class: 'inputdata-cont-description-level', subs: [
             {elem: 'textarea', id: 'inputdata_level_description', placeholder: `Descripción`}
          ]},
          {elem: 'div', class: 'inputdata-cont-btn-oper', subs: [
             {elem: 'button', id: 'cancel_edit', class: 'button-cancel', text: 'Cancelar edición'},
             {elem: 'button', id: 'edit_schema', class: 'button-edit btn-edit-schema', text: 'Editar'}
          ]}
       ]},
   }
}

export const elementsList = {
   elements: {
      el: {elem: 'button', class: 'button-list', text: 'Añadir'},
      box_warning: {elem: 'div', class: 'box-warning', subs: [
         {elem: 'div', class: 'warn-title', subs: [
            {elem: 'h2', text: 'Borrar formulario'}
         ]},
         {elem: 'div', class: 'warn-description', subs: [
            {elem: 'p', text: 'Esta a punto de borrar el formulario: Formulario Uno. Este paso es irreversible. Si desea continuar con esta acción haga click en Eliminar, de lo contrario haga click en Cancelar.'}
         ]},
         {elem: 'div', class: 'warn-btns', subs: [
            {elem: 'button', class: 'button-yel', text: 'Cancelar'},
            {elem: 'button', class: 'button-red', text: 'Eliminar'}
         ]},
      ]},
      btn_list: {elem: 'li', class: 'li-list', subs: [
         {elem: 'div', class: 'cont-btn-list', subs: [
            {elem: 'button', class: 'button-list', text: 'Formulario de datos uno'},
            {elem: 'div', class: 'cont-ops-btns', subs: [
               {elem: 'div', class: 'cont-ed-del', subs: [
                  {elem: 'button', class: 'button-ic-ed ic-30'},
                  {elem: 'button', class: 'button-ic-del ic-30'}
               ]},
               {elem: 'div', class: 'img-config-list'}
            ]}
         ]}
      ]},
      inp_det_text: {elem: 'input', class: 'inp-det-text', placeholder: 'Etiqueta Ej: Nombres'},
      inp_det_select: {elem: 'select', class: 'select-det', subs: [
         {elem: 'option', text: 'first'}
      ]},
      inp_form_text: {elem: 'div', class: 'cont-inp-f cont-inp-form-text', subs: [
         {elem: 'div', class: 'cont-inp-req', subs: [
            {elem: 'span', class: 'el-req'}
         ]},
         {elem: 'div', class: 'cont-inp-elem', subs: [
            {elem: 'input', class: 'inp-f-text', type: 'text', placeholder: 'Nombres'}
         ]},
         {elem: 'div', class: 'cont-inp-opts', subs: [
            {elem: 'div', class: 'cont-btns-op', subs: [
               {elem: 'button', class: 'button-ic-ed ic-30'},
               {elem: 'button', class: 'button-ic-del ic-30'}
            ]}
         ]}
      ]},
      inp_form_radio: {elem: 'div', class: 'cont-inp-f cont-inp-form-text', subs: [
         {elem: 'div', class: 'cont-inp-req', subs: [
            {elem: 'span', class: 'el-req'}
         ]},
         {elem: 'div', class: 'cont-inp-elem', subs: [
            {elem: 'input', id: 'inp_test', class: 'inp-f-rad', type: 'radio', name: 'inp'},
            {elem: 'label', class: 'label-f-rad', for: 'inp_test', text: 'Opcion uno'},
            {elem: 'input', id: 'inp_test1', class: 'inp-f-rad', type: 'radio', name: 'inp'},
            {elem: 'label', class: 'label-f-rad', for: 'inp_test1', text: 'Opcion uno'},
            {elem: 'input', id: 'inp_test2', class: 'inp-f-rad', type: 'radio', name: 'inp'},
            {elem: 'label', class: 'label-f-rad', for: 'inp_test2', text: 'Opcion uno'},
         ]},
         {elem: 'div', class: 'cont-inp-opts', subs: [
            {elem: 'div', class: 'cont-btns-op', subs: [
               {elem: 'button', class: 'button-ic-ed ic-30'},
               {elem: 'button', class: 'button-ic-del ic-30'}
            ]}
         ]}
      ]},
      inp_form_check: {elem: 'div', class: 'cont-inp-f cont-inp-form-text', subs: [
         {elem: 'div', class: 'cont-inp-req', subs: [
            {elem: 'span', class: 'el-req'}
         ]},
         {elem: 'div', class: 'cont-inp-elem', subs: [
            {elem: 'input', id: 'inp_test', class: 'inp-f-che', type: 'checkbox', name: 'inp'},
            {elem: 'label', class: 'label-f-che', for: 'inp_test', text: 'Opcion uno'},
            {elem: 'input', id: 'inp_test1', class: 'inp-f-che', type: 'checkbox', name: 'inp'},
            {elem: 'label', class: 'label-f-che', for: 'inp_test1', text: 'Opcion uno'},
            {elem: 'input', id: 'inp_test2', class: 'inp-f-che', type: 'checkbox', name: 'inp'},
            {elem: 'label', class: 'label-f-che', for: 'inp_test2', text: 'Opcion uno'},
         ]},
         {elem: 'div', class: 'cont-inp-opts', subs: [
            {elem: 'div', class: 'cont-btns-op', subs: [
               {elem: 'button', class: 'button-ic-ed ic-30'},
               {elem: 'button', class: 'button-ic-del ic-30'}
            ]}
         ]}
      ]}
   }
}