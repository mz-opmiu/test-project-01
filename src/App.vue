<template>
  <div id="app" class="wrap">
    <gnb></gnb>
    <router-view />
  </div>
</template>

<script>
import gnb from '@/shared/components/Gnb'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    gnb
  }
}
</script>

<style lang="scss" >
@import '@/styles/base/_reset-eric.scss';
</style>
