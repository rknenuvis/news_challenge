var widthmenu  = document.getElementById("menu").scrollWidth;
var heightmenu = document.getElementById("menu").scrollHeight;

var svgmenu=d3.select("div#menu")
			.append("svg")
			.attr("width",widthmenu)
			.attr("heigtht",heightmenu)
var menudata=["中国世界遗产有哪些","中国世界遗产如何分布","中国世界遗产的特征","中国政府怎样申遗","身边的遗产"]
var paddingmenu=widthmenu/5*3/(menudata.length-1);



var tooltipmenu = d3.select("body")
.append("div")
.attr("class","tooltip")
.style("z-index",9999)
.style("opacity",0.0);

svgmenu.selectAll(".menu")
		.data(menudata)
		.enter()
		.append("image")
            .attr("x",function(d,i){return widthmenu/5+paddingmenu*i;})
            .attr("y",5)
            .attr("width",30)
            .attr("height",30)
            .attr("xlink:href",function(d,i){
                return "./data/menu/"+i+".png";
            })
            .on("mouseover",function(d,i){
				tooltipmenu.html(menudata[i])
				            .style("left", (d3.event.pageX) + "px")
				            .style("top", (d3.event.pageY + 20) + "px")
				            .style("opacity",1.0);
			})
			.on("mousemove",function(d){
				    tooltipmenu.style("left", (d3.event.pageX) + "px")
				            .style("top", (d3.event.pageY + 20) + "px");
			})
			.on("mouseout",function(d){
				    tooltipmenu.style("opacity",0.0);
			})
			.on("click",function(d,i){
				for(var k=0;k<menudata.length;k++)
				{
					d3.selectAll("div#box"+k).style("display","none");
				}
				d3.selectAll("div#box"+i).style("display","block");
			})