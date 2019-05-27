import * as axios from 'axios'

export function sendLoadRequest () {
  return axios.get('https://rickandmortyapi.com/api/character')
    .then(response => response)
    .catch(err => { throw err })
}

export function sendToggleRequest (id) {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response)
    .catch(err => { throw err })
}
