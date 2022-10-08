
  new Vue({
    el: '#Kotodama',
    data () {
      return {
        aviso:false
      }
    },
    methods: {

      eventoaviso: function () {
        this.aviso = true

        let $form = document.getElementById("form")
      $form.addEventListener('submit', handleSubmit)

      },

      
      handleSubmit: async function (event){
        event.preventDefault()

        const form = new FormData(this)
          const response = await fetch(this.action, {
          method:this.method,
          body:form,
          headers:{
            'Accept': 'application/json'
          }
        })
        if(response.ok ){this.reset()}
      
      }
      }

  })

