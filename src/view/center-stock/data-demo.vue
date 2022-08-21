<template>
  <div class="liam_container">
    <div class="container_cockpit">
      <div class="cc_title">
        <h2>标题大行情</h2>
        <h5>2022-07-29 16:50</h5>
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
      </div>
      <div class="cc_row3_merge">
        <h5>沪近6个月成交量</h5>
      </div>
    </div>
  </div>
</template>

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
}

.cc_row2_middle {
  width: 48%;
  height: 30vh;
  position: absolute;
  right: 28.3%;
  bottom: 20vh;
  border: 1px solid rgb(223, 13, 164);
}

.cc_row2_right {
  width: 28%;
  height: 30vh;
  position: absolute;
  right: 0;
  bottom: 20vh;
  border: 1px solid #aaa;
}

.cc_row3_merge {
  width: 100%;
  height: 20vh;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  border: 1px solid rgb(12, 231, 31);
  overflow: hidden;
}

.container_cockpit h5 {
  margin: 2px;
}

.container_cockpit hr {
  margin: 1px;
  height: 1px;
  border: none;
  border-top: 1px solid #e8e8e8;
}

.container_cockpit ol {
  margin: 1vw;
}

.chart_class2 {
  width: 100%;
  height: 30vh;
  padding: 0;
  margin: 0;
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
  margin: 2px 0;
  height: 2vw;
  line-height: 2vw;
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
}
</style>
