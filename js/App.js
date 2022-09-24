
    
    new Vue({
      el:'#app',
      data: {
          total:0,
          totalmes:0,
          countweblandignpage:false,
          countWebDinamica:false,
          countWebEcommerce:false,
          countWebAmedida:false,
          countycode:false,
          countSEOonPage:false,
          countGoogleAnalytics:false,
          countApp:false,
          countemail:false,
          countSEOdecompetencia:false,
          countBrandBook:false,
          countBranding:false,
          countPapeleria:false,
          countArtepublicitario:false,
          countEdiciondevideo:false,
          countPackaging:false,
          countdisenodelogo:false,
          countUkiyo:false
      },
      
  methods: {

      weblandignpage: function () {
        this.countweblandignpage = true
        return this.total = this.total + 300
      },
      WebDinamica: function () {
        this.countWebDinamica = true
        return this.total = this.total + 500
      },
      WebEcommerce: function () {
        this.countWebEcommerce = true
        return this.total = this.total + 800
      },
      WebAmedida: function () {
        this.countWebAmedida = true
        return this.total = this.total + 900
      },
      ycode: function () {
        this.countycode = true
        return this.total = this.total + 300
      },
      SEOonPage: function () {
        this.countSEOonPage = true
        return this.total = this.total + 80
      },
      GoogleAnalytics: function () {
        this.countGoogleAnalytics = true
        return this.total = this.total + 80
      },
      App: function () {
        this.countApp = true
        return this.total = this.total + 100
      },
      email: function () {
        this.countemail = true
        return this.total = this.total + 300
      },
      SEOdecompetencia: function () {
        this.countSEOdecompetencia = true
        return this.totalmes = this.totalmes + 50
      },
      BrandBook: function () {
        this.countBrandBook = true
        return this.total = this.total + 600
      },
      Branding: function () {
        this.countBranding = true
        return this.total = this.total + 100
      },
      Papeleria: function () {
        this.countPapeleria = true
        return this.total = this.total + 400
      },
      Artepublicitario: function () {
        this.countArtepublicitario = true
        return this.total = this.total + 300
      },
      Ediciondevideo: function () {
        this.countEdiciondevideo = true
        return this.total = this.total + 700
      },
      Packaging: function () {
        this.countPackaging = true
        return this.total = this.total + 600
      },
      disenodelogo: function () {
        this.countdisenodelogo = true
        return this.total = this.total + 100
      },
      Ukiyo: function () {
        this.countUkiyo = true
        return this.total = this.total + 80
      }


    }
  })
