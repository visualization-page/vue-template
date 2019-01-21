<template>
  <div class="home">
    <template
      v-for="(item, i) in components"
    >
      <component
        :key="i"
        :is="item.name"
        :config="item.props"
      />
    </template>
  </div>
</template>

<script>
// inject-start
import ybutton from '@/components/button/index.vue'
const components = [
  {
    "name": "ybutton",
    "path": "@/components/button/index.vue",
    "props": {
      "text": "我是按钮",
      "backgroundColor": "red",
      "color": "white",
      "width": 100,
      "height": 40
    }
  }
]
const importList = {
  'ybutton': ybutton
}
// inject-end

export default {
  name: 'home',
  components: {
    ...importList
  },
  data () {
    return {
      components
    }
  },
  created () {
  }
}
</script>
