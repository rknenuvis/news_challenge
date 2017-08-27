draw_leixing();
function draw_leixing(){
    var font=18;
    
    var width = document.getElementById("leixing").scrollWidth;
    var iconsize=width/4;
    console.log(width)
    var svg=d3.select("div#leixingbiaoti")
            .append("svg")
            .attr("width",width)
            .attr("height",80)
    svg.append("image")
        .attr("x",0)
        .attr("y",10)
        .attr("width",width*0.9)
        .attr("height",70)
        .attr("xlink:href",function(d){
                return "./data/tezheng/biaoti/leixing.jpg";
            });
var myChartleixing = echarts.init(document.getElementById('leixing'))
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name  + params.value + '项';
            return res;
        }
    },
    grid: [
        {x: '6%', y: '6%', width: '38%', height: '38%'},
        {x2: '6%', y: '6%', width: '38%', height: '38%'},
        {x: '6%', y2: '5%', width: '38%', height: '38%'},
        {x2: '6%', y2: '5%', width: '38%', height: '38%'}
    ],
    xAxis: [{
        gridIndex:0,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['世界自然遗产']
    },
    {
        gridIndex:0,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['25%']
    },
    {
        gridIndex:1,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['世界文化遗产']
    },
    {
        gridIndex:1,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['58%']
    },
    {
        gridIndex:2,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['世界文化与自然遗产']
    },
    {
        gridIndex:2,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['7%']
    },
    {
        gridIndex:3,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['文化景观']
    },
    {
        gridIndex:3,
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:font
            }
        },
        data: ['10%']
    },
    ],
    yAxis: [{gridIndex: 0,
        show: false,
        min:1,
        max:3
    },
    {gridIndex: 1,
        show: false,
        min:1,
        max:3
    },
    {gridIndex: 2,
        show: false,
        min:1,
        max:3
    },
    {gridIndex: 3,
        show: false,
        min:1,
        max:3
    }],
    /*graphic: {
         elements: [{
             type: 'image',
             style: {
                 image: "./data/tezheng/leixing/ziran.png",
                 width: iconsize,
                 height: iconsize
             },
             left: '6.5%',
             top: '3%'
         },
         {
             type: 'image',
             style: {
                 image: "./data/tezheng/leixing/wenhua.png",
                 width: iconsize,
                 height: iconsize
             },
             left: '56.5%',
             top: '3%'
         },
         {
             type: 'image',
             style: {
                 image: "./data/tezheng/leixing/wenzi.png",
                 width: iconsize,
                 height: iconsize
             },
             left: '6.5%',
             top: '53%'
         },
         {
             type: 'image',
             style: {
                 image: "./data/tezheng/leixing/wenjing.png",
                 width: iconsize,
                 height: iconsize
             },
             left: '56.5%',
             top: '53%'
         }]
     },*/
    series: [
    {
            name: 'I',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: ["世界自然遗产",2],
            symbol:'image://./data/tezheng/leixing/ziran.png',
            symbolSize:iconsize
     },
     {
            name: 'I2',
            type: 'scatter',
            xAxisIndex: 2,
            yAxisIndex: 1,
            data: ["世界文化遗产",2],
            symbol:'image://./data/tezheng/leixing/wenhua.png',
            symbolSize:iconsize
     },
     {
            name: 'I3',
            type: 'scatter',
            xAxisIndex: 4,
            yAxisIndex: 2,
            data: ["世界文化与自然遗产",2],
            symbol:'image://./data/tezheng/leixing/wenzi.png',
            symbolSize:iconsize
     },

     {
            name: 'I4',
            type: 'scatter',
            xAxisIndex: 6,
            yAxisIndex: 3,
            data: ["文化景观",2],
            symbol:'image://./data/tezheng/leixing/wenjing.png',
            symbolSize:iconsize
     },
//////pie
    {
        "name": "世界自然遗产",
        "center": [
            "25%",
            "25%"
        ],
        "radius": [
            "33%",
            "34%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        
        "data": [{
            "value": 13,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 15
                }
            },
        }, {
            "name": " ",
            "value": 39,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                },
                "emphasis": {
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                }
            }
        }]
    }, {
        "name": "中国的世界遗产",
        "center": [
            "25%",
            "25%"
        ],
        "radius": [
            "39%",
            "40%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
            "value": 52,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 1
                }
            },
        }]
    },
    {
        "name": "世界文化遗产",
        "center": [
            "75%",
            "25%"
        ],
        "radius": [
            "33%",
            "34%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        
        "data": [{
            "value": 30,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 15
                }
            },
        }, {
            "name": " ",
            "value": 22,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                },
                "emphasis": {
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                }
            }
        }]
    }, {
        "name": "中国的世界遗产",
        "center": [
            "75%",
            "25%"
        ],
        "radius": [
            "39%",
            "40%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
            "value": 52,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 1
                }
            },
        }]
    },
    {
        "name": "世界文化与自然遗产",
        "center": [
            "25%",
            "75%"
        ],
        "radius": [
            "33%",
            "34%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        
        "data": [{
            "value": 4,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 15
                }
            },
        }, {
            "name": " ",
            "value": 48,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                },
                "emphasis": {
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                }
            }
        }]
    }, {
        "name": "中国的世界遗产",
        "center": [
            "25%",
            "75%"
        ],
        "radius": [
            "39%",
            "40%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
            "value": 52,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 1
                }
            },
        }]
    },
    {
        "name": "文化景观",
        "center": [
            "75%",
            "75%"
        ],
        "radius": [
            "33%",
            "34%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        
        "data": [{
            "value": 5,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 5
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 15
                }
            },
        }, {
            "name": " ",
            "value": 47,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                },
                "emphasis": {
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                }
            }
        }]
    }, {
        "name": "中国的世界遗产",
        "center": [
            "75%",
            "75%"
        ],
        "radius": [
            "39%",
            "40%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
            "value": 52,
            "name": "",
            "label": {
                "normal": {
                    "show": false,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#85b6b2'
                    }, {
                        offset: 1,
                        color: '#6d4f8d'
                    }]),
                    "borderWidth": 1
                }
            },
        }]
    }]
};
myChartleixing.setOption(option);
}