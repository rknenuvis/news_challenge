var myChartline = echarts.init(document.getElementById('linechart'));
d3.csv("./data/howshenyi/中国30年申遗数量.csv",function(data){
//var width = document.getElementById("shenyibuzhou").scrollWidth;
//var height = document.getElementById("shenyibuzhou").scrollWidth;
/*console.log(width)
    var svg=d3.select("div#shenyibuzhou")
            .append("svg")
            .attr("width",width)
            .attr("height",height)
    svg.append("image")
        .attr("x",0)
        .attr("y",0)
        .attr("width",width)
        .attr("height",height)
        .attr("xlink:href",function(d){
                return "./data/howshenyi/buzhou.jpg";
            });*/


var xdata=[];
for(var i=1987;i<2018;i++)xdata.push(i);

var wendata=[];
var zidata=[];
var wenzidata=[];
var wenjingdata=[];
var zongdata=[];
var yeardata=[];
var lastyear=0;
wendata.push(parseInt(data[0].wen));
zidata.push(parseInt(data[0].zi));
wenzidata.push(parseInt(data[0].wenzi));
wenjingdata.push(parseInt(data[0].wenjing));
zongdata.push(parseInt(data[0].num));
yeardata.push(parseInt(data[0].num));
for(var i=1;i<data.length;i++)
{
	wendata.push(wendata[i-1]+parseInt(data[i].wen));
	zidata.push(zidata[i-1]+parseInt(data[i].zi));
	wenzidata.push(wenzidata[i-1]+parseInt(data[i].wenzi));
	wenjingdata.push(wenjingdata[i-1]+parseInt(data[i].wenjing));
	zongdata.push(zongdata[i-1]+parseInt(data[i].num));
	/*zidata.push(data[i].zi);
	wenzidata.push(data[i].wenzid);
	wenjingdata.push(data[i].wenjing);
	yeardata.push(data[i].num);
	lastyear=lastyear+parseInt(data[i].num);
	zongdata.push(lastyear);*/
	yeardata.push(data[i].num);
}
console.log(yeardata)
var option = {
    backgroundColor: '#F2F2F2',
     title:{
        text:"数据来源：联合国教科文组织官网",
        textStyle:{
            color:"#333",
            fontSize:12
        },
         subtext:'\n        自1987年第一批遗产申遗成功以来，截至2017年我国共有世界遗产52项。正以平均每两年申请一项世界遗产的速度增长。\n从增长类型来看世界文化遗产的增长量始终居高不下，而世界自然遗产自1993年3项申遗后，一直到2004年才出现增长，直至\n2006年世界自然遗产的年申遗增长量才出现总体上升态势。文化景观和世界文化与自然遗产的增长量始终偏低。',
         subtextStyle: {
			color: '#000',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 18,
		},
       x:'8%',
        y:'80%',

     },
     toolbox: {
        show : true,
        right:'5%',
        feature : {
            //dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['stack', 'tiled'],seriesIndex:{stack:[0,1,2,3]}},
            //restore : {show: true},
            //saveAsImage : {show: true}
        }
    },

	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />{a4}: {c4}<br />{a5}: {c5}',
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#6a7985'
			}
		},
	
	},
	grid: {
		left: '5%',
		right: '5%',
		bottom: '30%',
		top:'10%',
		padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        left:'5%',
		//top:'2%',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[
        {
            name:'每年申遗数量',
        },
        {
            name:'世界自然遗产',
            //icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
            name:'世界文化遗产',
        },
        {
            name:'世界文化与自然遗产',
        },
        {
            name:'文化景观',
        },
        {
            name:'总数',
        }
        ],
        textStyle: {
			//color: '#a8aab0',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 16,            
        }
    },
	xAxis: [
		{
			type: 'category',
			boundaryGap: true,//坐标轴两边留白
			data: xdata,//['鲁班七号', '王昭君', '阿珂', '赵云', '张飞', '孙膑', '安琪拉', '李白', '花木兰', '妲己','刘备','诸葛亮','关羽'],
			axisLabel: { //坐标轴刻度标签的相关设置。
				interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
				margin:15,
				textStyle: {
					//color: '#078ceb',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
					
				}
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					//color:'#fff',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					//color: '#a8aab0',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				show: true
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					//color: ['#fff'],
					opacity:0.06
				}
			}

		}
	],
	dataZoom:[
	{   show:true,
	        height:30,
	        xAxisIndex: 0,
	        bottom:'20%',
	        type: 'slider',
	        start: 1,
	        end: 35,
	        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
	        handleSize:'110%',
	        handleStyle: {
	            color:'#9B4E4E'
	        },
	        filterMode: 'empty',
	     },
	    {
	         show:true,
	         type: 'inside',
	         height:15,
	         start: 1,
	         end:35
	     }
	    ],
    series : [
        {
            name:'世界自然遗产',
            type:'bar',
            data:zidata,//[4.9, 7.3, 9.2, 5.6, 7.7, 5.6, 4.2, 3.6, 6, 6.4,5.2,4.8,5.5],
            //barWidth: 15,
            barGap:0,//柱间距离
            /*label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },*/
           /* itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    },{
                        offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                    },{
                        offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                    },{
                        offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                    }], false),
                },
            },*/
        },
        {
            name:'世界文化遗产',
            type:'bar',
            data:wendata,//[2.9, 5, 4.4, 2.7, 5.7, 4.6, 1.2, 2.7, 4.8, 6.0,3.5,2.5,4.5],
           // barWidth: 15,
            barGap:0.2,//柱间距离
            /*label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },*/
            /*itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    },{
                        offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                    },{
                        offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                    }], false),
                },
            },*/
        },
        {
            name:'世界文化与自然遗产',
            type:'bar',
            data:wenzidata,//[2.9, 5, 4.4, 2.7, 5.7, 4.6, 1.2, 2.7, 4.8, 6.0,3.5,2.5,4.5],
           // barWidth: 15,
            barGap:0.2,//柱间距离
            /*label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },*/
            /*itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    },{
                        offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                    },{
                        offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                    }], false),
                },
            },*/
        },
        {
            name:'文化景观',
            type:'bar',
            data:wenjingdata,//[2.9, 5, 4.4, 2.7, 5.7, 4.6, 1.2, 2.7, 4.8, 6.0,3.5,2.5,4.5],
            //barWidth: 15,
            barGap:0.2,//柱间距离
            /*label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },*/
            /*itemStyle: {//图形样式
                normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                    },{
                        offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                    },{
                        offset: 0.25, color: 'rgba(226, 99, 74, 0.7)'
                    }, {
                        offset: 0, color: 'rgba(253, 200, 106, 0.7)'
                    }], false),
                },
            },*/
        },
        
        {
            
            name:'总数',
            type:'line',
            symbolSize:10,
            symbol:'circle',
            itemStyle:{
                normal:{
                    //color:'#CB6C1F',
                    barBorderRadius:0,
                    label:{
                        show:true,
                        position:'top',
                        formatter:function(p){
                         return p.value > 0 ? (p.value) : ''; 
                        }
                    }
                }
            },
            data:zongdata//['7.0','13.3','13.6','8.3','13.4','10.2','5.4','6.3','10.8','12.4','8.7','7.3','10.0']
        },
{
            
            name:'每年申遗数量',
            type:'line',
            symbolSize:10,
            symbol:'circle',
            itemStyle:{
                normal:{
                    //color:'#CB6C1F',
                    barBorderRadius:0,
                    label:{
                        show:true,
                        position:'top',
                        formatter:function(p){
                         return p.value > 0 ? (p.value) : ''; 
                        }
                    }
                }
            },
            data:yeardata//['7.0','13.3','13.6','8.3','13.4','10.2','5.4','6.3','10.8','12.4','8.7','7.3','10.0']
        },
        
    ]
};
myChartline.setOption(option);})