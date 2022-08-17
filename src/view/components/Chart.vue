<template>
  <div :id="chart_id" :class="chart_class"></div>
</template>

<script>
import { onBeforeUnmount, onMounted } from 'vue'
import * as echarts from 'echarts'

export default {
  name: 'EChart',
  props: {
    chart_option: {},
    chart_id: {
      default: 'charts_id',
    },
    chart_class: {
      default: 'chart_class',
    },
  },
  setup(props) {
    // console.log("props id_value:", props.chart_option);
    let myChart
    const initChart = () => {
      // 基于准备好的dom，初始化echarts实例
      myChart = echarts.init(document.getElementById(props.chart_id))
    }
    const setOption = db => {
      // console.log("s call-db:", db);
      // 绘制图表
      myChart.setOption(db)
    }
    onBeforeUnmount(() => {
      // console.log("L run:onBeforeUnmount");
      myChart.dispose()
    })
    onMounted(() => {
      // console.log("L run:onMounted");
      initChart()
      if (props.chart_option) setOption(props.chart_option)
    })
    return { setOption }
  },

  // 监听数据变化
  watch: {
    chart_option(newValue, oldValue) {
      // console.log('newValue:', newValue)
      if (newValue && oldValue !== newValue) {
        this.setOption(newValue)
      }
    },
  },
}
</script>

<style>
.chart_class {
  width: 30vw;
  height: 30vh;
}
</style>
