import platziMusicService from './platzi-music'

const trakService = {}

trakService.search = function (q) {
  const type = 'track'
  return platziMusicService.get('/search', {
    // params: { q: q, type: type }
    params: { q, type }
  })
    // .then(function (res) {
    //   return res.data
    // })
    .then((res) => res.data)
}
export default trakService