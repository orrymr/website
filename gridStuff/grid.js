palette=["#cb997e", "#ddbea9", "#ffe8d6", "#b7b7a4", "#a5a58d", "#6b705c"];

d3.select("body")
    .style("background-color", palette[5]);

var numRows = 20, numCols = 20, sqaureSize = 45;

var grid = d3.range(numRows).map(function(i){
    var cols = d3.range(numCols).map(function(j){
        return {
            xPos: j,
            yPos: i
        }
    })

    return cols
});

d3.select("#grid")
    .append("svg")
    .attr("width", numCols * sqaureSize + "px")
    .attr("height", numRows * sqaureSize + "px")
    .selectAll("g")
    .data(grid)
    .enter()
    .append("g")
    .selectAll("rect")
    .data(function(d){
        return d;
    })
    .enter()
    .append("rect")
    .attr("width", sqaureSize + "px")
    .attr("height", sqaureSize + "px")
    .style("fill", palette[2])
    .style("stroke", palette[0])
    .attr("transform", function(d){
        return "translate(" + sqaureSize * d.xPos + ", " + sqaureSize * d.yPos + ")";
    });


var row = 1, col = 1;   
var ball = d3.select("#grid")
    .select("svg")
    .append("g")
    .attr("class", "circle")
    .append("circle")
    .attr("cx", ((sqaureSize/2) + sqaureSize * (row - 1)) + "px")
    .attr("cy", ((sqaureSize/2) + sqaureSize * (col - 1)) + "px")
    .attr("r", sqaureSize / 4 + "px")
    .style("fill", palette[4])
    .style("stroke", palette[4])
    .style("stroke-width", "1")

function drawBall(row, col) {
    ball.transition()
        .duration(700)
        .attr("cx", ((sqaureSize/2) + sqaureSize * (row - 1)) + "px")
        .attr("cy", ((sqaureSize/2) + sqaureSize * (col - 1)) + "px")
}

function playGame(){
    drawBall(++row, ++col);
}

d3.interval(playGame, 1000)

// drawBall(row = 2, col = 2);
// drawBall(row = 3, col = 4);