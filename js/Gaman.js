
  new Vue({
    el: '#Gaman',
    data () {
      return {
        info: [],
        loading: true,
        errored: false
      }
    },
    mounted () {
      setTimeout(() => {
      axios
        .get("https://api.airtable.com/v0/appvGeynovaU9ro7D/Gaman?api_key=key0BNJe1hXIPdJUJ")
        
        .then(response => (this.info = response))
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
      },3000);
    }
  })
