var width1 = document.getElementById("niandai").scrollWidth;

    var svg1=d3.select("div#shenyibuzhoubiaoti")
            .append("svg")
            .attr("width",width1)
            .attr("height",80)
    svg1.append("image")
        .attr("x",0)
        .attr("y",10)
        .attr("width",width1*0.9)
        .attr("height",70)
        .attr("xlink:href",function(d){
                return "./data/howshenyi/buzhoubiaoti.jpg"});

    var svg2=d3.select("div#linechartbiaoti")
            .append("svg")
            .attr("width",width1)
            .attr("height",80)
    svg2.append("image")
        .attr("x",0)
        .attr("y",10)
        .attr("width",width1*0.9)
        .attr("height",70)
        .attr("xlink:href",function(d){
                return "./data/howshenyi/linechartbiaoti.jpg"});