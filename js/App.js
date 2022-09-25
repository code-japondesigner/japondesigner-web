
    
    new Vue({
      el:'#app',
      data: {
          total:0,
          totalmes:0,
          countweblandignpage:0,
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
        this.countweblandignpage += 1
        if(this.countweblandignpage % 2){
          return this.total = this.total + 300
        }else{
          return this.total = this.total - 300
        }
      },
      WebDinamica: function () {
        this.countWebDinamica += 1
        if(this.countWebDinamica % 2){
          return this.total = this.total + 500
        }else{
          return this.total = this.total - 500
        }
      },
      WebEcommerce: function () {
        this.countWebEcommerce += 1
        if(this.countWebEcommerce % 2){
          return this.total = this.total + 800
        }else{
          return this.total = this.total - 800
        }
      },
      WebAmedida: function () {
        this.countWebAmedida += 1
        if(this.countWebAmedida % 2){
          return this.total = this.total + 900
        }else{
          return this.total = this.total - 900
        }
      },
      ycode: function () {
        this.countycode += 1
        if(this.countycode % 2){
          return this.total = this.total + 300
        }else{
          return this.total = this.total - 300
        }
      },
      SEOonPage: function () {
        this.countSEOonPage += 1
        if(this.countSEOonPage % 2){
          return this.total = this.total + 80
        }else{
          return this.total = this.total - 80
        }
      },
      GoogleAnalytics: function () {
        this.countGoogleAnalytics += 1
        if(this.countGoogleAnalytics % 2){
          return this.total = this.total + 80
        }else{
          return this.total = this.total - 80
        }
      },
      App: function () {
        this.countApp += 1
        if(this.countApp % 2){
          return this.total = this.total + 100
        }else{
          return this.total = this.total - 100
        }
      },
      email: function () {
        this.countemail += 1
        if(this.countemail % 2){
          return this.total = this.total + 300
        }else{
          return this.total = this.total - 300
        }
      },
      SEOdecompetencia: function () {
        this.countSEOdecompetencia += 1
        if(this.countSEOdecompetencia % 2){
          return this.total = this.total + 40
        }else{
          return this.total = this.total - 40
        }
      },
      BrandBook: function () {
        this.countBrandBook += 1
        if(this.countBrandBook % 2){
          return this.total = this.total + 600
        }else{
          return this.total = this.total - 600
        }
      },
      Branding: function () {
        this.countBranding += 1
        if(this.countBranding % 2){
          return this.total = this.total + 100
        }else{
          return this.total = this.total - 100
        }
      },
      Papeleria: function () {
        this.countPapeleria += 1
        if(this.countPapeleria % 2){
          return this.total = this.total + 400
        }else{
          return this.total = this.total - 400
        }
      },
      Artepublicitario: function () {
        this.countArtepublicitario += 1
        if(this.countArtepublicitario % 2){
          return this.total = this.total + 300
        }else{
          return this.total = this.total - 300
        }
      },
      Ediciondevideo: function () {
        this.countEdiciondevideo += 1
        if(this.countEdiciondevideo % 2){
          return this.total = this.total + 700
        }else{
          return this.total = this.total - 700
        }
      },
      Packaging: function () {
        this.countPackaging += 1
        if(this.countPackaging % 2){
          return this.total = this.total + 600
        }else{
          return this.total = this.total - 600
        }
      },
      disenodelogo: function () {
        this.countdisenodelogo += 1
        if(this.countdisenodelogo % 2){
          return this.total = this.total + 100
        }else{
          return this.total = this.total - 100
        }
      },
      Ukiyo: function () {
        this.countUkiyo += 1
        if(this.countUkiyo % 2){
          return this.total = this.total + 80
        }else{
          return this.total = this.total - 80
        }
      }


    }
  })
