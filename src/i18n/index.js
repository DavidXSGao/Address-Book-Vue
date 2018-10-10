import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import cn from './cn'

Vue.use(VueI18n)

const locale = 'en'

const messages = {
  en: en,
  cn: cn
}

const i18n = new VueI18n({
  locale,
  fallbackLocale: locale,
  messages
})

export default i18n
