 var widtho = document.getElementById("niandai").scrollWidth;
    var svgo=d3.select("div#otherbiaoti")
            .append("svg")
            .attr("width",widtho)
            .attr("height",80)
    svgo.append("image")
        .attr("x",0)
        .attr("y",10)
        .attr("width",widtho*0.9)
        .attr("height",70)
        .attr("xlink:href",function(d){
                return "./data/tezheng/other/biaoti.jpg";
            });