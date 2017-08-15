var map = new BMap.Map("baidumap", {
            enableMapClick: false
        });    // 创建Map实例
    map.setMapStyle({style:'grayscale'});  
    var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);
map.enableScrollWheelZoom(true);

////添加文字
// 定义一个控件类,即function
    function ZoomControl(){
      // 默认停靠位置和偏移量
      this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
      this.defaultOffset = new BMap.Size(10, 10);
    }

    // 通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMap.Control();

    // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
    // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
    ZoomControl.prototype.initialize = function(map){
      // 创建一个DOM元素
      var div = document.createElement("div");
      // 添加文字说明
      div.appendChild(document.createTextNode("注:地图收录中国世界遗产和全国重点文物保护单位"));
      // 设置样式
      div.style.cursor = "pointer";
      div.style.border = "2px solid gray";
      div.style.backgroundColor = "white";
      div.style.fontSize="20px";
      // 绑定事件,点击一次放大两级
      // 添加DOM元素到地图中
      map.getContainer().appendChild(div);
      // 将DOM元素返回
      return div;
    }
    // 创建控件
    var myZoomCtrl = new ZoomControl();
    // 添加到地图当中
    map.addControl(myZoomCtrl);


//定位
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})


var opts = {
                width : 30,     // 信息窗口宽度
                height: 30,     // 信息窗口高度
                //title : "信息窗口" , // 信息窗口标题
                enableMessage:true//设置允许信息窗发送短息
               };

    // 编写自定义函数,创建标注
    function addMarker(point){
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
    }
    for(var k=0;k<yichan.length;k++)
    {
        var pointtt=new BMap.Point(yichan[k].lng,yichan[k].lat);
        var myIcon = new BMap.Icon(
            "./data/baidumap/icon.png", 
            new BMap.Size(24,24));

        var marker = new BMap.Marker(pointtt,{icon:myIcon});
        map.addOverlay(marker);
        var content=yichan[k].name+"   第"+yichan[k].pici+"批次";
        addClickHandler(content,marker);
      
    }
  
    function addClickHandler(content,marker){
        marker.addEventListener("click",function(e){
            openInfo(content,e)}
        );
    }
    function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
   
   


   /* // 随机向地图添加25个标注
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 25; i ++) {
        var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        addMarker(point);
    }*/

/*var convertedData=[];
for(var i=0;i<yichan.length;i++)
{
    var res=[];
    res.push(yichan[i].lng),
    res.push(yichan[i].lat),
    res.push(yichan[i].pici),
    convertedData.push({
        name:yichan[i].name,
        value:res
    })
}
})
for(var i=0;i<yichan.length;i++)
{
    var point=new BMap.Point(yichan[i].lng,yichan[i].lat);
    //map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);           
}*/
////添加覆盖物
/*
var myChartmap = echarts.init(document.getElementById('baidumap'));
d3.json("./data/baidumap/遗产.json",function(yichan){

var convertedData=[];
for(var i=0;i<yichan.length;i++)
{
    var res=[];
    res.push(yichan[i].lng),
    res.push(yichan[i].lat),
    res.push(yichan[i].pici),
    convertedData.push({
        name:yichan[i].name,
        value:res
    })
}
console.log(convertedData)
option = {
    title: {
        text: '身边的重点文物',
        left: 'center'
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [116.331398,39.897445],
        zoom: 12,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
    series : [
    {
            name: '文化景观',
            type: 'scatter',
            coordinateSystem: 'bmap',
            //symbol:"image://./data/icon/2.png",
            data: convertedData,
            symbolSize:20,
            itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: 'yellow'
            }
        }
     }
    
    ]
};
myChartmap.setOption(option);

var bmap = myChartmap.getModel().getComponent('bmap').getBMap();
bmap.addControl(new BMap.MapTypeControl());

var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			bmap.addOverlay(mk);
			bmap.panTo(r.point);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})
})*/