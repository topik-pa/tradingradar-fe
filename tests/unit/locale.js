const en = require('@/locales/en.json')
const it = require('@/locales/it.json')
const locale = {
  en,
  it
}

const getLabelValue = function (labelKey, defaultLocale = 'en') {
  let labelValue = locale[defaultLocale]
  labelKey.split('.').forEach(key => {
    labelValue = labelValue[key]
  })
  return labelValue
}

module.exports = getLabelValue
