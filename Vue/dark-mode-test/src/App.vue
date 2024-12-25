<script>
import * as echarts from 'echarts';
import darkModeBtn from './components/dark-mode-btn.vue';
export default {
  data() {
    return {
      isDarkMode: false,
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ],
      },
    }
  },
  components: {
    darkModeBtn
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  mounted() {
    var chartDom = this.$refs.chart;
    var myChart = echarts.init(chartDom);
    myChart.setOption(this.option);
  }
}
</script>

<template>
  <div id="mainWrapper" :class="{ darkMode: isDarkMode }">

    <div id="headerWrapper">
      <div id="title">
        早濑优香
      </div>
      <div id="dark-mode-btn-wrapper">
        <darkModeBtn @toggle="toggleDarkMode" />
      </div>
    </div>

    <div id="chart" ref="chart">
    </div>

  </div>
</template>

<style>
#mainWrapper {
  color: #000;
  height: 1000px;
  background-color: #fff;
  transition: all 0.3s ease;
}

#headerWrapper {
  height: 100px;
  background-color: rgb(255, 255, 255);
  border-bottom: 3px #555 solid;
  transition: all 0.3s ease;
}

#headerWrapper #title {
  line-height: 95px;
  font-size: 50px;
  position: relative;
  left: 20px;
}

#mainWrapper.darkMode {
  color: #fff;
  background-color: #000;
}

#mainWrapper.darkMode #headerWrapper {
  background-color: rgb(50, 50, 50);
}

#dark-mode-btn-wrapper {
  height: 40px;
  width: 150px;
  position: absolute;
  top: 30px;
  right: 10px;
  overflow: hidden;
}

#chart {
  height: 500px;
  width: 500px;
}
</style>
