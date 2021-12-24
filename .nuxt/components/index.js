export { default as AppBar } from '../..\\components\\AppBar.vue'
export { default as AppBarSub } from '../..\\components\\AppBarSub.vue'
export { default as AppBarSub2 } from '../..\\components\\AppBarSub2.vue'
export { default as AppBarSub3 } from '../..\\components\\AppBarSub3.vue'
export { default as Avatar } from '../..\\components\\Avatar.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Menu } from '../..\\components\\Menu.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Sheets } from '../..\\components\\Sheets.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
