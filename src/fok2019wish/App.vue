<template>
  <div id="app" class="wrap">
    {{ msg }}
    <Gnb></Gnb>
    <router-view />
  </div>
</template>

<script>
import Gnb from '@/shared/components/Gnb'
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'app',
  data() {
    return {
      msg: isMobile
        ? 'Welcome to Your Vue.js mobile App!'
        : 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Gnb
  },
  created() {
    if (isMobile) {
      const viewport = document.querySelector('meta[name=viewport]')
      viewport.setAttribute('content', 'width=640,user-scalable=0')
    }
  }
}
</script>
