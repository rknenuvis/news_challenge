
var myChart = echarts.init(document.getElementById('heatmap'),'infographic');
//d3.json("./data/baidumap/遗产.json",function(yichandata0){
d3.json("./data/heatmap/zi.json",function(yichandata0){
  d3.json("./data/heatmap/wen.json",function(yichandata1){
    d3.json("./data/heatmap/wenjing.json",function(yichandata2){
        d3.json("./data/heatmap/wenzi.json",function(yichandata3){

var scattersize=15;

var data = 
    [
    {"name":"上海","value":"0"},
{"name":"海南","value":"0"},
{"name":"香港","value":"0"},
{"name":"台湾","value":"0"},
{"name":"西藏","value":"1"},
{"name":"黑龙江","value":"1"},
{"name":"澳门","value":"1"},
{"name":"青海","value":"2"},
{"name":"广东","value":"2"},
{"name":"宁夏","value":"2"},
{"name":"天津","value":"2"},
{"name":"广西","value":"2"},
{"name":"重庆","value":"2"},
{"name":"内蒙古","value":"2"},
{"name":"新疆","value":"3"},
{"name":"贵州","value":"3"},
{"name":"浙江","value":"3"},
{"name":"江西","value":"3"},
{"name":"湖南","value":"3"},
{"name":"江苏","value":"3"},
{"name":"安徽","value":"3"},
{"name":"陕西","value":"3"},
{"name":"甘肃","value":"3"},
{"name":"吉林","value":"3"},
{"name":"湖北","value":"4"},
{"name":"福建","value":"4"},
{"name":"山东","value":"4"},
{"name":"山西","value":"4"},
{"name":"辽宁","value":"4"},
{"name":"河北","value":"4"},
{"name":"云南","value":"5"},
{"name":"四川","value":"5"},
{"name":"河南","value":"6"},
{"name":"北京","value":"7"}
];
/*var shengfenname=[];
for (var i = data.length-1; i >=0; i--) {
        shengfenname.push(data[i].name);
    }
*/
var shengfenname=[];
for (var i = 0; i<data.length; i++) {
        shengfenname.push(data[i].name);
    }

var convertedData0=[];
for(var i=0;i<yichandata0.length;i++)
{
    var res=[];
    res.push(yichandata0[i].lng),
    res.push(yichandata0[i].lat),
    res.push(yichandata0[i].cate),
    convertedData0.push({
        name:yichandata0[i].name,
        value:res
    })
}

var convertedData1=[];
for(var i=0;i<yichandata1.length;i++)
{
    var res=[];
    res.push(yichandata1[i].lng),
    res.push(yichandata1[i].lat),
    res.push(yichandata1[i].cate),
    convertedData1.push({
        name:yichandata1[i].name,
        value:res
    })
}

var convertedData2=[];
for(var i=0;i<yichandata2.length;i++)
{
    var res=[];
    res.push(yichandata2[i].lng),
    res.push(yichandata2[i].lat),
    res.push(yichandata2[i].cate),
    convertedData2.push({
        name:yichandata2[i].name,
        value:res
    })
}

var convertedData3=[];
for(var i=0;i<yichandata3.length;i++)
{
    var res=[];
    res.push(yichandata3[i].lng),
    res.push(yichandata3[i].lat),
    res.push(yichandata3[i].cate),
    convertedData3.push({
        name:yichandata3[i].name,
        value:res
    })
}
//console.log(convertedData);

option = {
    backgroundColor: '#F2F2F2',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',

    title: [
        {
            text: '中国世界遗产分布图',
            top:'4%',
            left: 'center',
            textStyle: {
                color: '#000',
                fontSize:30,
                fontWeight:500
            },
            subtext: '（各省点遗产数量，包含跨省共同申遗的项目，如建筑群、区域自然遗产等\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n数据来源:联合国教科文组织官网，国家文物局官网',//'除了北京拥有7项世界遗产外，华夏腹地的河南拥有6项世界遗产屈居第二；云南，四川以5项世界遗产居于第三。而上海、海南、香港、台湾成为中国仅有的4个没有世界文化遗产的省区。\n(每省的遗产统计，包含跨省共同申遗的项目如建筑群，地区自然遗产等)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n数据来源:联合国教科文组织官网，国家文物局官网',
        },
        {
            id: 'statistic',
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
                //color: '#fff',
                fontSize: 16
            }
        }
    ],
    legend: {
        //y: 'right',
        orient:'vertical',
        left:'5%',
        bottom:'5%',
        data: ['世界自然遗产', '世界文化遗产', '世界文化与自然遗产','文化景观'],
        textStyle: {
           // color: '#fff',
            fontSize: 16
        }
    },
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#b1e4ff'
            }
        }
    },
   
    geo: {
        map: 'china',
        //top:'10%',
        left: '7',
        right: '25%',
        //center: [117.98561551896913, 31.205000490896193],
        
        zoom: 0.8,
         silent:true,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
               // areaColor: '#323c48',
                //borderColor: '#111'
            },
            emphasis: {
               // areaColor: '#2a333d'
            }
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:'{a}:{b0}'
    },
    grid: {
        right: '3%',
        top: '15%',
        bottom: 40,
        width: '20%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, //textStyle: {color: '#aaa'}
    },
        min:0
    },
    yAxis: {
        type: 'category',
        name: '省份分布',
        nameTextStyle:{color:'#000'},
        nameGap: 16,
        axisLine: {show: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false, lineStyle: {color: '#ddd'}},
        axisLabel: {interval: 0, textStyle: {color: '#000'}
    },
        data: shengfenname
    },
    series : [
        {
            name: '世界自然遗产',
            type: 'scatter',
            coordinateSystem: 'geo',
            //symbol:"image://./data/icon/0.png",
            data: convertedData0,
            symbolSize:scattersize,
           /* label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },*/
            itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: '#8dc1a9'
            }
        }
        },
        {
            name: '世界文化遗产',
            type: 'scatter',
            coordinateSystem: 'geo',
           // symbol:"image://./data/icon/1.png",
            data: convertedData1,
            symbolSize:scattersize,
            /*label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },*/
           itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: '#eedd78'
            }
        }
        },
        {
            name: '文化景观',
            type: 'scatter',
            coordinateSystem: 'geo',
            //symbol:"image://./data/icon/2.png",
            data: convertedData2,
            symbolSize:scattersize,
            /*label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },*/
            itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: '#dd6b66'
            }
        }
        },
        {
            name: '世界文化与自然遗产',
            type: 'scatter',
            coordinateSystem: 'geo',
            //symbol:"image://./data/icon/3.png",
            data: convertedData3,
            symbolSize:scattersize,
            /*label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },*/
            itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: '#7289ab'
            }
        }
        },
        {
            name:'省份分布',
            id: 'bar',
            zlevel: 2,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#D23431'//'#ddb926'
                }
            },
            data: data
        }
    ]
};
 myChart.setOption(option);
 //window.onresize = myCharts.resize();
 var svg=d3.select("#heatmap")
            .append("svg")
            .attr("width",'100%')
            .attr("height",'150px')
var rect=svg.append("rect")
            .attr("x",0)
            .attr("y",0)
            .attr("width",'100%')
            .attr("height",'130px')
            .attr("fill",'#F2F2F2')

svg.append("image")
    .attr("x",0)
    .attr("y",0)
    .attr("width",'100%')
    .attr("height",'130px')
     .attr("xlink:href",function(d){
                return "./data/heatmap/text.jpg";
            });
            /*var str = "除了北京拥有7项世界遗产外，华夏腹地的河南拥有6项世界遗产屈居第二；云南，四川以5项世界遗产居于第三。而上海、海南、香港、台湾成为中国仅有的4个没有世界文化遗产的省区。";       
appendMultiText(svg,str,'15%',10,1800,50,"simsun");*/

//svg.append("text")
//.attr("x",'15%')
//.attr("y",'20%')
//.text("除了北京拥有7项世界遗产外，华夏腹地的河南拥有6项世界遗产屈居第二；云南，四川以5项世界遗产居于第三。")
//.style("text-anchor","middle")
/*svg.append("text")
.attr("x",'15%')
.attr("y",'40%')
.text("而上海、海南、香港、台湾成为中国仅有的4个没有世界文化遗产的省区。")
svg.append("text")
.attr("x",'15%')
.attr("y",'60%')
.text("(每省的遗产统计，包含跨省共同申遗的项目如建筑群，地区自然遗产等)")*/
})
})
})
})