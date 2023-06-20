module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: 'gitee',
    async loadContent() {
      console.log('this is gitee')
    },
    async contentLoaded({ content, actions }) {
      if (typeof window !== 'undefined') {
        console.log('123123')
      }
    }
  }
}
