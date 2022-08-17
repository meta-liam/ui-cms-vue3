<template>
  <div class="liam_container">
    <div class="container_cockpit">
      <div class="cc_title">
        <h2>标题大行情</h2>
        <h5>2022-07-29 16:50</h5>
      </div>
      <div class="cc_row3_merge">
        <h5 class="title">沪近6个月成交量</h5>
        <Chart :chart_option="historyDB" chart_id="charts_id1_41" chart_class="chart_class2"></Chart>
      </div>
      <div class="cc_row1_left">
        <h5>常见指数</h5>
      </div>
      <div class="cc_row1_middle">
        <h5>板块行情</h5>
      </div>
      <div class="cc_row1_right">
        <h2>cc_row1_right</h2>
      </div>
      <div class="cc_row2_left">
        <h2>cc_row2_left</h2>
      </div>
      <div class="cc_row2_middle">
        <h5>基金持仓变动</h5>
      </div>
      <div class="cc_row2_right">
        <h5>自选股票行情</h5>
        <ol>
          <ul>
            <li>代码</li>
            <li>名称</li>
            <li>涨跌幅</li>
            <li>最新价</li>
          </ul>
          <ul>
            <li>603201</li>
            <li>N常润</li>
            <li>44.01%</li>
            <li>44.01</li>
          </ul>
          <ul>
            <li>688170</li>
            <li>德龙激光</li>
            <li>1.01%</li>
            <li>12.01</li>
          </ul>
          <ul>
            <li>688115</li>
            <li>思林杰</li>
            <li>-1.01%</li>
            <li>3.01</li>
          </ul>
          <ul>
            <a
              ><li>603201</li>
              <li>N常润</li>
              <li>44.01%</li>
              <li>44.01</li></a
            >
          </ul>
          <ul>
            <a
              ><li>688170</li>
              <li>德龙激光</li>
              <li>1.01%</li>
              <li>12.01</li></a
            >
          </ul>
          <ul>
            <a
              ><li>688115</li>
              <li>思林杰</li>
              <li>-1.01%</li>
              <li>3.01</li></a
            >
          </ul>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import historyDB from '../../data/stock/priceLine001979'
import Chart from '../components/Chart.vue'

export default {
  components: {
    Chart,
  },
  setup() {
    onMounted(() => {
      // this.$route.query
    })
    return { historyDB }
  },
}
</script>

<style>
.container_cockpit {
  border: 1px solid rgb(247, 3, 3);
  overflow: hidden;
  margin: 2px;
}

.cc_title {
  width: 100%;
  height: 8vh;
  clear: both;
  border: 1px solid #aaa;
}

.cc_row1_left {
  width: 33%;
  height: 30vh;
  position: absolute;
  left: 0px;
  bottom: 50vh;
  border: 1px solid rgb(198, 234, 21);
}

.cc_row1_middle {
  width: 33%;
  height: 30vh;
  position: absolute;
  right: 33.3%;
  bottom: 50vh;
  border: 1px solid #aaa;
}

.cc_row1_right {
  width: 33%;
  height: 30vh;
  position: absolute;
  right: 0;
  bottom: 50vh;
  border: 1px solid rgb(19, 168, 227);
}

.cc_row2_left {
  width: 23%;
  height: 30vh;
  position: absolute;
  left: 0;
  bottom: 20vh;
  border: 1px solid rgb(24, 31, 224);
  z-index: 10;
}

.cc_row2_middle {
  width: 48%;
  height: 30vh;
  position: absolute;
  right: 28.3%;
  bottom: 20vh;
  border: 1px solid rgb(223, 13, 164);
  z-index: 10;
}

.cc_row2_right {
  width: 28%;
  height: 30vh;
  position: absolute;
  right: 0;
  bottom: 20vh;
  border: 1px solid #aaa;
  z-index: 10;
}

.cc_row3_merge {
  width: 100%;
  height: 30vh;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border: 1px solid rgb(12, 231, 31);
  overflow: hidden;
}

.container_cockpit h5 {
  margin: 0.1vh;
}

.container_cockpit hr {
  margin: 1px;
  height: 1px;
  border: none;
  border-top: 1px solid #e8e8e8;
}

.container_cockpit ol {
  margin: 1hw;
}

.chart_class2 {
  width: 100%;
  height: 30vh;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: -5vh;
  z-index: 1;
}

.cc_title h2 {
  margin: 4px;
}

.cc_title h5 {
  margin: 4px;
}

.cc_row1_left ul,
.cc_row1_middle ul {
  width: 33.1%;
  float: left;
  /* background-color: aqua; */
}

.cc_row1_left hr,
.cc_row1_middle hr {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.cc_row1_left li,
.cc_row1_middle li {
  width: 49.9%;
  display: block;
  float: left;
  font-size: 1.1vw;
  text-align: center;
}

.cc_row1_right ul {
  margin-top: 4px;
}

.cc_row1_right ul li:nth-child(1) {
  width: 90%;
  font-size: 1.2vw;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cc_row1_right ul li:nth-child(2) {
  font-size: 1vw;
}

.cc_row2_left img {
  width: 100%;
}

.cc_row2_middle li {
  width: 16.666%;
  font-size: 1.1vw;
  display: block;
  float: left;
}

.cc_row2_right ul,
.cc_row2_middle ul {
  width: 100%;
  clear: both;
  border-bottom: 1px solid #e8e8e8;
  margin: 0.3vh 0;
  height: 3.5vh;
  line-height: 3.5vh;
}

.cc_row2_right li {
  width: 24.9%;
  font-size: 1.1vw;
  display: block;
  float: left;
}

.cc_row3_merge {
  text-align: left;
}
.cc_row3_merge h5 {
  padding-left: 1vw;
  position: absolute;
  width: 30%;
  text-align: center;
  right: 40%;
  bottom: 16vh;
  /* border: 1px solid rgb(198, 234, 21); */
  z-index: 2;
}
</style>
