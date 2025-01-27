document.addEventListener('DOMContentLoaded', function () {
    // 初始化 ECharts 实例
    var myChart = echarts.init(document.getElementById('chart1'));
  
    // 配置图表
/*
商朝：科学成就 2 项，发明 2 项
周朝：科学成就 4 项，发明 2 项
春秋战国：科学成就 6 项，发明 4 项
秦朝：科学成就 5 项，发明 2 项
汉朝：科学成就 10 项，发明 5 项
三国：科学成就 7 项，发明 2 项
晋朝：科学成就 12 项，发明 2 项
南北朝：科学成就 9 项，发明 2 项
隋朝：科学成就 11 项，发明 1 项
唐朝：科学成就 15 项，发明 3 项
五代十国：科学成就 13 项，发明 2 项
宋朝：科学成就 18 项，发明 3 项
元朝：科学成就 14 项，发明 2 项
明朝：科学成就 16 项，发明 2 项
清朝：科学成就 3 项，发明 1 项
*/
    var option = {
      title: {
        text: '历代科学成就与发明'
      },
      tooltip: {},
      legend: {
        data: ['科学成就', '发明']
      },
      xAxis: {
        data: ['商', '周', '春秋战国', '秦', '汉', '三国', '两晋', '南北朝', '隋', '唐', '五代十国', '宋', '元', '明', '清']
      },
      yAxis: {},
      series: [
        {
          name: '科学成就',
          type: 'line',
          data: [
            {value: 2, name: '商', customFunction: function() { jumpTo('商');}},
            {value: 4, name: '周', customFunction: function() { jumpTo('周');}},
            {value: 6, name: '春秋战国', customFunction: function() { jumpTo('春秋战国');}},
            {value: 5, name: '秦', customFunction: function() { jumpTo('秦');}},
            {value: 10, name: '汉', customFunction: function() { jumpTo('汉');}},
            {value: 7, name: '三国', customFunction: function() { jumpTo('三国');}},
            {value: 12, name: '两晋', customFunction: function() { jumpTo('两晋');}},
            {value: 9, name: '南北朝', customFunction: function() { jumpTo('南北朝');}},
            {value: 11, name: '隋', customFunction: function() { jumpTo('隋');}},
            {value: 15, name: '唐', customFunction: function() { jumpTo('唐');}},
            {value: 13, name: '五代十国', customFunction: function() { jumpTo('五代十国');}},
            {value: 18, name: '宋', customFunction: function() { jumpTo('宋');}},
            {value: 14, name: '元', customFunction: function() { jumpTo('元');}},
            {value: 16, name: '明', customFunction: function() { jumpTo('明');}},
            {value: 3, name: '清', customFunction: function() { jumpTo('清');}}
          ]
        },
        {
          name: '发明',
          type: 'line',
          data: [
            {value: 2, name: '商', customFunction: function() { jumpTo('商');}},
            {value: 2, name: '周', customFunction: function() { jumpTo('周');}},
            {value: 4, name: '春秋战国', customFunction: function() { jumpTo('春秋战国');}},
            {value: 2, name: '秦', customFunction: function() { jumpTo('秦');}},
            {value: 5, name: '汉', customFunction: function() { jumpTo('汉');}},
            {value: 2, name: '三国', customFunction: function() { jumpTo('三国');}},
            {value: 2, name: '两晋', customFunction: function() { jumpTo('两晋');}},
            {value: 2, name: '南北朝', customFunction: function() { jumpTo('南北朝');}},
            {value: 1, name: '隋', customFunction: function() { jumpTo('隋');}},
            {value: 3, name: '唐', customFunction: function() { jumpTo('唐');}},
            {value: 2, name: '五代十国', customFunction: function() { jumpTo('五代十国');}},
            {value: 3, name: '宋', customFunction: function() { jumpTo('宋');}},
            {value: 2, name: '元', customFunction: function() { jumpTo('元');}},
            {value: 2, name: '明', customFunction: function() { jumpTo('明');}},
            {value: 1, name: '清', customFunction: function() { jumpTo('清');}}
          ]
        }
      ]
    };
  
    // 渲染图表
    myChart.setOption(option);

    // 添加点击事件监听器
    myChart.on('click', function(params) {
        if (params.data && params.data.customFunction) {
            params.data.customFunction();
        }
    });
  });

  function jumpTo(string) {
    url = 'dynasty/' + string + '/index.html';
    openWebpage(url);
  }

function openWebpage(url) {
    open(url).then(() => {
        console.log('Opened webpage:', url);
    }).catch((err) => {
        console.error('Error opening webpage:', err);
    });
}
