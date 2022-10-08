
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
      $form.addEventListener('submit', this.handleSubmit)

      },
      }

  })

