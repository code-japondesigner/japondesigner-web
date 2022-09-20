
  new Vue({
    el: '#Gaman',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get("https://api.airtable.com/v0/appvGeynovaU9ro7D/Desarrollo?api_key=key0BNJe1hXIPdJUJ")
        .then(response => (this.info = response))
    }
  })

//https://es.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
//https://airtable.com/appvGeynovaU9ro7D/api/docs

//https://api.airtable.com/v0/appvGeynovaU9ro7D/Desarrollo?api_key=key0BNJe1hXIPdJUJ