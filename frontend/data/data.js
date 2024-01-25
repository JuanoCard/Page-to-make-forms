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
                        {elem: 'button', id: 'choose_form', class: 'button-blu', text: 'Prueba uno de tus formularios'}
                        // {elem: 'button', id: 'table_panel',  class: 'button-red btn-test-form', text: 'Elige un formulario creado'}
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
               ]},
               {elem: 'footer', class: 'panel-footer'}
            ]}
        ]
   },

   model_form: {
      arrayData: [
         {elem: 'form', class: 'form-d', subs: [
            {elem: 'header', class: 'form-d-header', subs: [
               {elem: 'h4', id: 'title_form'}
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
                        {elem: 'input', type: 'text', id: 'inp_detOp1', class: 'inp-det-text-bt input-det inp-op', dataset1: ['data-key', 'opt']},
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
                        {elem: 'input', type: 'text', id: 'inp_detOp1', class: 'inp-det-text-bt input-det inp-op', dataset1: ['data-key', 'opt']},
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
                        {elem: 'input', type: 'text', id: 'inp_detOp1', class: 'inp-det-text-bt input-det inp-op', dataset1: ['data-key', 'opt']},
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
      form_li_inputs: {elem: 'li', class: 'form-d-li', subs: [
         {elem: 'div', class: 'form-d-item-back', subs: [
            {elem: 'div', class: 'form-d-item-tit', subs: [
               {elem: 'p', class: 'p-item-tit'}
            ]},
            {elem: 'div', class: 'cont-inp-f cont-inp-form', subs: [
               {elem: 'div', class: 'cont-inp-req', subs: [
                  {elem: 'span', class: 'el-req'}
               ]},
               {elem: 'div', class: 'cont-inp-elem'}
            ]}
         ]}
      ]},
   }
}

export const table = {
   str: {
      arrayData: [
         {elem: 'div', class: 'container-test', subs: [
            {elem: 'div', class: 'test-header', subs: [
                {elem: 'div', class: 'cont-logo', subs: [
                    {elem: 'button', id: 'table_back_home', class: 'logo head-logo'}
                ]},
                {elem: 'button', id: 'test_back_form', class: 'button-finish-test', text: 'Finalizar'}
            ]},
            {elem: 'main', class: 'test-body', subs: [
               {elem: 'div', class: 'test-body-form', subs: [
                  // {elem: 'div', id: 'part_add_form_chosen', class: 'part-add-form-chosen'}
                  {elem: 'div', id: 'back_form', class: 'back-form'}
               ]},
               {elem: 'div', class: 'test-body-table', subs: [
                  {elem: 'h4', text: 'La tabla de datos se visualizará aqui al guardar la información del formulario'}
               ]},
               {elem: 'div', class: 'test-body-stats', subs: [
                  {elem: 'div', class: 'stat-box-frec'}
               ]}
            ]}
         ]}
      ]
   },
   tableBox: {
      arrayData: [
         {elem: 'div', class: 'part-table-block-footer', subs: [
            {elem: 'div', class: 'part-block-table', subs: [
               {elem: 'div', id: 'part_header_tools', class: 'part-header-tools', subs: [
                  {elem: 'div', class: 'part-header-tools-btns', subs: [
                     {elem: 'div', class: 'part-header-tools-show', subs: [
                        {elem: 'button', id: 'btn_part_header_tool_form', class: 'button-ic-form ic-26 ic-form btn-fo-ac'},
                        {elem: 'button', id: 'btn_part_header_tool_stats', class: 'button-ic-stats ic-26 ic-stats btn-st-ac'}
                     ]},
                     {elem: 'div', class: 'part-header-tools-opts oc', subs: [
                        {elem: 'button', id: 'btn_part_header_del_gr', class: 'button-ic-del ic-26'}
                     ]}
                  ]},
                  {elem: 'div', class: 'part-header-tools-search', subs: [
                     {elem: 'input', type: 'text', id: 'input_search_table', class: 'input-search-table', placeholder: 'Buscar'}
                  ]}
               ]},
               {elem: 'div', id: 'part_table_cont', class: 'part-table-cont'}
            ]},
            {elem: 'div', id: 'part_table_footer', class: 'part-table-footer'}
         ]},
      ]
   }
}

export const listForms = []