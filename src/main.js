import { createApp } from 'vue'
import App from './App'
import './registerServiceWorker'
import router from '@/router'
import store from '@/store'
import { createI18n } from 'vue-i18n'

// Popolate messages obj with translations
const getLocalMessages = function () {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

// Configure i18n
const i18n = createI18n({
  locale: navigator.language === 'it-IT' ? 'it' : 'en',
  fallbackLocale: 'en',
  messages: getLocalMessages()
})

// Create App
createApp(App).use(store).use(router).use(i18n).mount('#app')
