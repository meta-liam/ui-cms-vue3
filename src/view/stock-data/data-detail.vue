<template>
  <div class="liam_container">
    <div class="container_detail">
      <div class="cd_title">
        <h2>标题中国富强</h2>
        <h5>{{ $route.params.id }}</h5>
      </div>
      <div class="cd_row1_left">
        <h5>沪近6个月成交量</h5>
      </div>
      <div class="cd_row1_middle">
        <h5>沪近6个月成交量</h5>
      </div>
      <div class="cd_row1_right">
        <h5>沪近6个月成交量</h5>
      </div>
      <div class="cd_row2_left">
        <h5>沪近6个月成交量</h5>
      </div>
      <div class="cd_row2_middle">
        <h5>沪近6个月成交量</h5>
      </div>
      <div class="cd_row2_right">
        <h5>沪近6个月成交量</h5>
      </div>
      <div class="cd_row3_merge">
        <h5>沪近6个月成交量</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {},
  setup() {
    const router = useRouter()

    onMounted(() => {
      // this.$route.query
      const codeID = router.currentRoute?.value.params.id
      console.log('url:', codeID)
    })
    return {}
  },
}
</script>
<style>
.container_detail {
  border: 1px solid rgb(247, 3, 3);
  overflow: hidden;
  margin: 2px;
}

.cd_title {
  width: 100%;
  height: 8vh;
  clear: both;
  border: 1px solid #aaa;
}

.cd_row1_left {
  width: 16%;
  height: 30vh;
  position: absolute;
  left: 0px;
  bottom: 50vh;
  border: 1px solid rgb(198, 234, 21);
}

.cd_row1_middle {
  width: 50%;
  height: 30vh;
  position: absolute;
  right: 33.3%;
  bottom: 50vh;
  border: 1px solid #aaa;
}

.cd_row1_right {
  width: 33%;
  height: 30vh;
  position: absolute;
  right: 0;
  bottom: 50vh;
  border: 1px solid rgb(19, 168, 227);
}

.cd_row2_left {
  width: 33%;
  height: 30vh;
  position: absolute;
  left: 0;
  bottom: 20vh;
  border: 1px solid rgb(24, 31, 224);
}

.cd_row2_middle {
  width: 33%;
  height: 30vh;
  position: absolute;
  right: 33.3%;
  bottom: 20vh;
  border: 1px solid rgb(223, 13, 164);
}

.cd_row2_right {
  width: 33%;
  height: 30vh;
  position: absolute;
  right: 0;
  bottom: 20vh;
  border: 1px solid #aaa;
}

.cd_row3_merge {
  width: 100%;
  height: 20vh;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border: 1px solid rgb(12, 231, 31);
  overflow: hidden;
}

.container_detail h5 {
  margin: 2px;
}

.container_detail hr {
  margin: 1px;
  height: 1px;
  border: none;
  border-top: 1px solid #e8e8e8;
}

.container_detail ol {
  margin: 1vw;
}

.chart_class2 {
  width: 100%;
  height: 30vh;
  padding: 0;
  margin: 0;
}

.cd_title h2 {
  margin: 4px;
}

.cd_title h5 {
  margin: 4px;
}

.cd_row1_left li {
  width: 100%;
  display: block;
  font-size: 1.3vw;
}

.cd_row1_middle img {
  width: 100%;
  margin-top: 2vw;
}

.cd_row1_right ul {
  margin-top: 4px;
}

.cd_row1_right ul li:nth-child(1) {
  width: 90%;
  font-size: 1.5vw;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cd_row1_right ul li:nth-child(2) {
  font-size: 1.2vw;
}

.cd_row2_left img {
  width: 80%;
}

.cd_row2_middle img {
  width: 60%;
}

.cd_row2_right img {
  width: 80%;
}
</style>
