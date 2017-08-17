draw_pie();
function draw_pie(){
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
var biaozhuntext=[
"标准(i):代表一种独特的艺术成就，<br>一种创造性的天才杰作",
"标准(ii):能在一定时期内或世界某一文化区域内，<br>对建筑艺术、纪念物艺术、城镇规划或景观设计方面的发展产生过大影响",
"标准(iii):能为一种已消逝的文明或文化传统提供一种独特的至少是特殊的见证",
"标准(iv):可作为一种建筑或建筑群或景观的杰出范例，<br>展示出入类历史上一个(或几个)重要阶段",
"标准(v):可作为传统的人类居住地或使用地的杰出范例，<br>代表一种(或几种)文化，<br>尤其在不可逆转之变化的影响下变得易于损坏",
"标准(vi):与具特殊普遍意义的事件或现行传统或思想或<br>信仰或文学艺术作品有直接或实质的联系",
"标准(vii):构成代表地球演化史中重要阶段的突出例证",
"标准(viii):构成代表进行中的重要地质过程、<br>生物演化过程以及人类与自然环境相互关系的突出例证",
"标准(ix):独特、稀有或绝妙的自然现象、<br>地貌或具有罕见自然美的地带",
"标准(x):尚存的珍稀或濒危动植物种的栖息地"
]
option = {
    title : {
       // text: '申遗标准',
       subtextStyle:{
        fontFamily:"宋体",
        //fontWeight:'bold',
        color:'black',
        fontSize:12
       },
        subtext: '注：i-vi\n       文化类标准（包含对文化景观、世界文化遗产、世界文化与自然遗产的评定）\n       vii-x\n       自然类标准（包含对世界自然遗产、世界文化与自然遗产的评定）',
        x: 'left',
        y:"75%"
    },
tooltip:{
    show:true
},
    grid:{
        bottom:0
    },
    series: [
        {
            name:'',
            type:'pie',
            selectedMode: 'single',
            center:['50%','40%'],
            radius: [0, '25%'],
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
            name:'',
            type:'pie',
            radius: ['35%', '55%'],
            center:['50%','40%'],
            roseType: 'radius',
            label: {
                normal: {
                    textStyle:{
                        fontSize:16,
                    }
                }
            },
            labelLine: {
                normal: {
                    
                    smooth: 0.2,
                    length: 5,
                    length2: 5
                }
            },
            data:[
                {value:17, name:'标准(i):17项'},//name:'标准(i):代表一种独特的艺术成就，\n一种创造性的天才杰作；'},
                {value:27, name:'标准(ii):27项'},//能在一定时期内或世界\n某一文化区域内，对建筑艺\n术、纪念物艺术、城镇规划\n或景观设计方面的发展产生\n过大影响；'},
                {value:31, name:'标准(iii):31项'},//能为一种已消逝的文明或文化传统提供\n一种独特的至少是特殊的见证；'},
                {value:25, name:'标准(iv):25项'},//可作为一种建筑或建筑群或景观的杰出范例，\n展示出入类历史上一个(或几个)重要阶段'},
                {value:9, name:'标准(v):9项'},//可作为传统的人类居住地或使用\n地的杰出范例，代表一种(或几种)\n文化，尤其在不可逆转之变化的\n影响下变得易于损坏'},
                {value:21, name:'标准(vi):21项'},//与具特殊普遍意义的事件或\n现行传统或思想或信仰或\n文学艺术作品有直接或实质的联系。'},
                {value:12, name:'标准(vii):12项'},//构成代表地球演化史中重要阶段的突出例证'},
                {value:4, name:'标准(viii):4项\n'},//构成代表进行中的重要地质过程、\n生物演化过程以及人类与自然环境\n相互关系的突出例证'},
                {value:3, name:'标准(ix):3项\n'},//独特、稀有或绝妙的自然现象、\n地貌或具有罕见自然美的地带；'},
                {value:7, name:'标准(x):7项\n'},//尚存的珍稀或濒危动植物种的栖息地\n'},
            ],
            tooltip: {
        //trigger: 'item',
        formatter: function(params){
            return biaozhuntext[params.dataIndex];
        }
    },
        },
        /*{
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
        }*/
    ]
};
 myChartpie.setOption(option);}