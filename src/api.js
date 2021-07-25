import { settings } from '@/settings.js'
// import { AUTH_LOGOUT } from './store/actions/auth'
// import store from '@/store'
// import router from '@/router'

// This controls the communication with the Back end application (from FE to BE)
export async function apiRequest (path = '', data = {}, method = 'GET') {
  const obj = {}
  const params = {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }
  // Include JWT token if found
  /*
  const accessToken = store.getters.user.accessToken
  if (accessToken) {
    params.headers.authorization = `Bearer ${accessToken}`
  }
  */
  // Add data if needed
  if (['post', 'put', 'patch'].includes(method.toLowerCase())) {
    params.body = JSON.stringify(data)
  }
  // Start communication
  await fetch(settings.apiEndpoint + path, params)
    .then(resp => {
      obj.status = resp.status
      // Logout if BE respond with "Unauthorized"
      /*
      if (obj.status === 401) {
        store.dispatch(AUTH_LOGOUT)
          .then(() => {
            router.push({ name: 'Login' })
          })
      }
      */
      return resp.json()
    })
    .then(data => { obj.body = data })
    .catch((err) => { console.error(err) }) // TODO: maybe a better error management?
  return obj
}
