<template>
  <div id="app" class="wrap">
    <Gnb></Gnb>
    <router-view />
  </div>
</template>

<script>
import Gnb from '@/shared/components/Gnb'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Gnb
  }
}
</script>
