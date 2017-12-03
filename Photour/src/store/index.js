import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import auth from './modules/auth'
import photos from './modules/photos'
import photoDetails from './modules/photoDetails'
import albums from './modules/albums'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    auth,
    photos,
    photoDetails,
    albums
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
