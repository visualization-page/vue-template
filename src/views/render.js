export default {
  functional: true,

  props: {
    components: Array,
    importList: Object
  },

  render (c, context) {
    function getComponent (item) {
      const key = Object.keys(context.props.importList).find(x => x === `${item.name}-${item.id}`)
      return context.props.importList[key]
    }
    const childs = context.props.components.map(item => c(getComponent(item), {
      props: {
        ...item.props
      }
    }))

    return c('div', {
      'class': {
        'components': true
      }
    }, childs)
  }
}
