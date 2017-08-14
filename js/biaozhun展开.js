draw_pie();
function draw_pie(){
    var wentext='red';
    var zitext='black';
    var width = document.getElementById("biaozhun").scrollWidth;
    var svg=d3.select("div#biaozhunbiaoti")
            .append("svg")
            .attr("width",width)
            .attr("height",80)
    svg.append("image")
        .attr("x",0)
        .attr("y",10)
        .attr("width",width*0.9)
        .attr("height",70)
        .attr("xlink:href",function(d){
                return "./data/tezheng/biaoti/biaozhun.jpg";
            });
var myChartpie = echarts.init(document.getElementById('biaozhun'))

option = {
    title : {
        text: '申遗标准',
        subtext: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n文化类标准包含对文化景观、世界文化遗产、世界文化与自然遗产的评定\n自然备注标准包含对世界自然遗产、世界文化与自然遗产的评定',
        x: 'center'
    },
    /*tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },*/
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '20%'],
            //roseType: 'area',
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:130, name:'文化类标准'},
                {value:26, name:'自然类标准',selected:true}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '60%'],
            roseType: 'radius',
            labelLine: {
                normal: {
                    
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            data:[
                {value:17, label:{normal:{textStyle:{color:wentext}}},name:'标准(i):代表一种独特的艺术成就，\n一种创造性的天才杰作；'},
                {value:27, label:{normal:{textStyle:{color:wentext}}},name:'标准(ii):能在一定时期内或世界\n某一文化区域内，对建筑艺\n术、纪念物艺术、城镇规划\n或景观设计方面的发展产生\n过大影响；'},
                {value:31, label:{normal:{textStyle:{color:wentext}}},name:'标准(iii):能为一种已消逝的文明或文化传统提供\n一种独特的至少是特殊的见证；'},
                {value:25, label:{normal:{textStyle:{color:wentext}}},name:'标准(iv):可作为一种建筑或建筑群或景观的杰出范例，\n展示出入类历史上一个(或几个)重要阶段'},
                {value:9, label:{normal:{textStyle:{color:wentext}}},name:'标准(vi):可作为传统的人类居住地或使用\n地的杰出范例，代表一种(或几种)\n文化，尤其在不可逆转之变化的\n影响下变得易于损坏'},
                {value:21, label:{normal:{textStyle:{color:wentext}}},name:'标准(vii):与具特殊普遍意义的事件或\n现行传统或思想或信仰或\n文学艺术作品有直接或实质的联系。'},
                {value:12, label:{normal:{textStyle:{color:zitext}}},name:'标准(ix):构成代表地球演化史中重要阶段的突出例证'},
                {value:4, label:{normal:{textStyle:{color:zitext}}},name:'\n\n\n\n标准(x):构成代表进行中的重要地质过程、\n生物演化过程以及人类与自然环境\n相互关系的突出例证'},
                {value:3, label:{normal:{textStyle:{color:zitext}}},name:'\n标准(ix):独特、稀有或绝妙的自然现象、\n地貌或具有罕见自然美的地带；'},
                {value:7, label:{normal:{textStyle:{color:zitext}}},name:'标准(x):尚存的珍稀或濒危动植物种的栖息地\n'},
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '60%'],
            roseType: 'radius',
            labelLine: {
                normal: {
                    
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data:[
                {value:17, name:'17'},
                {value:27, name:'27'},
                {value:31, name:'31'},
                {value:25, name:'25'},
                {value:9, name:'9'},
                {value:21, name:'21'},
                {value:12, name:'12'},
                {value:4, name:'4'},
                {value:3, name:'3'},
               {value:7, name:'7'},
            ]
        }
    ]
};
 myChartpie.setOption(option);}