import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuList: [],
      projeList: [],
      serviceList: [],
      contactForm: []
    },
    mutations: {
      setNav (state, navs) {
        state.menuList = navs
      },
      setProjects (state, proje) {
        state.projeList = proje
      },
      setService (state, servis) {
        state.serviceList = servis
      },
      setStages (state, stage) {
        state.contactForm = stage
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        vuexContext.commit('setNav', [
          { id: 1, title: 'Anasayfa', url: '#anasayfa' },
          { id: 2, title: 'Biz kimiz?', url: '#biz-kimiz' },
          { id: 3, title: 'Hizmetlerimiz', url: '#hizmetlerimiz' },
          { id: 4, title: 'Projeler', url: '#projeler' },
          { id: 5, title: 'Aşamalar', url: '#asamalar' },
          { id: 6, title: 'İletişim', url: '#iletisim' }
        ])

        vuexContext.commit('setProjects', [
          { id: 1, imgUrl: require('~/assets/images/Image-1.svg') },
          { id: 2, imgUrl: require('~/assets/images/Image-2.svg') },
          { id: 3, imgUrl: require('~/assets/images/Image-3.svg') },
          { id: 4, imgUrl: require('~/assets/images/Image-4.svg') },
          { id: 5, imgUrl: require('~/assets/images/Image-1.svg') },
          { id: 6, imgUrl: require('~/assets/images/Image-2.svg') },
          { id: 7, imgUrl: require('~/assets/images/Image-3.svg') },
          { id: 8, imgUrl: require('~/assets/images/Image-4.svg') }
        ])

        vuexContext.commit('setService', [
          { id: 1, title: 'Web Sitesi', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 2, title: 'Mobil Uygulama', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 3, title: 'Windows Uygulama', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 4, title: 'Seo - Aso', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 5, title: 'Sosyal Medya Yönetimi', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 6, title: 'Kampanya Yönetimi', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 7, title: 'Reklam Filmi', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 8, title: 'Animasyon', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 9, title: 'Ürün Çekimleri', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') },
          { id: 10, title: 'UI / UX', imgUrl: require('~/assets/images/badge-background.svg'), imgUrlHover: require('~/assets/images/badge-background-on-hover.svg') }
        ])

        vuexContext.commit('setStages', [
          { id: 1, title: 'Fikir', content: 'Proje ihtiyaçlarınıza yönelik üretildiğinden sorunlarınızı birlikte ele alır ve en uygun çözümü bulmak için beyin fırtınasıyla çalışmaya başlarız. İhtiyacınızın önceliklerini etaplara bölere sizlere yardımcı olur ve ihtiyacınız olan çözümü en kısa sürede edinmeniz için çalışırız. Fikir etabı, sizin sorununuz ve projenizin kapsamını belirlemekte belirlenir.' },
          { id: 1, title: 'Projelendirme', content: 'test içerik' },
          { id: 1, title: 'Geliştirme', content: 'içriklerrrr' },
          { id: 1, title: 'Test', content: 'testttt' },
          { id: 1, title: 'Yayın', content: 'testtt' }
        ])
      },
      setNav (vuexContext, navs) {
        vuexContext.commit('setNav', navs)
      },
      setProjects (vuexContext, proje) {
        vuexContext.commit('setProjects', proje)
      },
      setService (vuexContext, servis) {
        vuexContext.commit('setService', servis)
      },
      setStages (vuexContext, stage) {
        vuexContext.commit('setStages', stage)
      }
    },
    getters: {
      getNavs (state) {
        return state.menuList
      },
      getProjects (state) {
        return state.projeList
      },
      getService (state) {
        return state.serviceList
      },
      getStages (state) {
        return state.setStages
      }
    }
  })
}

export default createStore
