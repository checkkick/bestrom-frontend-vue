import { createStore } from 'vuex'
import clients from './modules/clients'
import filters from './modules/filters'
import history from './modules/history'
import news from './modules/news'
import packets from './modules/packets'
import page from './modules/page'
import partners from './modules/partners'
import product from './modules/product'
import vacancy from './modules/vacancy'

export default createStore({
	state() {
		return {
			server: 'http://bexram.online:8001/',
			language: 'RU',
		}
	},
	modules: {
		clients,
		partners,
		news,
		history,
		vacancy,
		product,
		filters,
		page,
		packets,
	},
})
