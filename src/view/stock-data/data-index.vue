<template>
  <h1>Home</h1>
  <nav>
    <router-link to="/about">Home</router-link> | <router-link to="/stock-data/cockpit">驾驶舱</router-link> |
    <router-link to="/stock-data/detail?id=sz001970">详情</router-link> |
  </nav>
  <div class="buttonBox">
    <button @click="client_event('go', '/stock-data/detail?id=sz001970')">跳转页面</button>
    <button @click="client_event('', {})">Change</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const clientEvent = (ty = '', db = {}) => {
      console.log(ty, db)
      if (ty === 'go') {
        router.push(db)
      }
    }
    return { client_event: clientEvent }
  },
}
</script>
