import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import './style.css'
import 'vue3-carousel/dist/carousel.css'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI,
})
// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp(App)
const pinia = createPinia()

app.provide(DefaultApolloClient, apolloClient)
app.use(pinia)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
