
  new Vue({
    el: '#form',
    data () {
      return {
 
      }
    },
    methods: {

      Formevent: function () {
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
      },

  })
