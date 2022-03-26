import Aframe from 'aframe'

export default Aframe.install = (Vue) => {
  Vue.mixin({
    created() {
      console.log('hello')
    }
  })

  Vue.use(Aframe)
}
