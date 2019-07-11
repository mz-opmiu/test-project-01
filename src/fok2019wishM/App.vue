<template>
  <div id="app" class="wrap">
    <Gnb></Gnb>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>


<script>
import Gnb from '@/shared/components/Gnb'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: { Gnb },
  mounted() {}
}
</script>
