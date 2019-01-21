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
const components = []
const importList = {}
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
