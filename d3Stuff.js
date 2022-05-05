palette=["#cb997e", "#ddbea9", "#ffe8d6", "#b7b7a4", "#a5a58d", "#6b705c"];

d3.select("body")
    .style("background-color", palette[5])
    .transition()
    .duration(1750)
    .style("background-color", palette[0]);

d3.select(".jumbotron")
    .style("background-color", palette[0])
    .transition()
    .duration(1750)
    .style("background-color", palette[5]);    

d3.selectAll(".link")
    .style("color", palette[4]);

// d3.selectAll(".make-cool")
//     .style("background", palette[0])
//     .style("border-style", "solid")
//     .style("border-color", palette[2]);

d3.selectAll(".make-cool")
    .style("background", function(d, i){
        return i % 2 ? palette[1] : palette[2];
    })
    .style("border-style", "solid")
    .style("border-color", function(d, i){
        return i % 2 ? palette[2] : palette[1];
    });


var width = 960, height = 500;
var numDots = 2000;

var dots = d3.range(numDots).map(function(){
    return {
        x: 480,
        y : 250,
    }
});

var svg = d3.select("#playground").append("svg")
    .attr("width", width)
    .attr("height", height);

var g = svg.selectAll("g")
    .data(dots)
    .enter()
    .append("g");

var head = g.append("ellipse")
    .attr("rx", 4)
    .attr("ry", 4)
    .attr("transform", "translate(480, 250)");

d3.timer(function(){

    for (i = 0; i < numDots; i++){
        dots[i].x = dots[i].x + 1 * (Math.random() > 0.5 ? -1 : 1);
        dots[i].y = dots[i].y + 1 * (Math.random() > 0.5 ? -1 : 1);
    }

    head.attr("transform", function(d){
        return "translate(" + d.x + ", " + d.y + ")";
    })

    
});
// var g = svg.selectAll("g")
//     .data(spermatozoa)
//   .enter().append("g");

// var head = g.append("ellipse")
//   .attr("rx", 6.5)
//   .attr("ry", 4);


d3.select(".foo").append("svg")
    .attr("width", width)
    .attr("height", 200)
        .append("g")
        .append("ellipse")
        .attr("rx", 50)
        .attr("ry", 50)
        .attr("transform", "translate(400, 100)")
        .transition()
        .duration(1000)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("transform", "translate(300, 100)")
        .transition()
        .duration(1000)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("transform", "translate(200, 180)")
        .transition()
        .duration(1000)
        .attr("rx", 50)
        .attr("ry", 50)
        .attr("transform", "translate(100, 50)");

