function add_to_scatterplot(d, ttip_text) {
    var fill_color = ttip_text ? "#1e803d" : "black"
    var circle = scatterplot.append("circle")
        .attr({
            "fill": "white",
            "r":5,
            "cx": x_scale_func(d['distance']),
            "cy":y_scale_func(d['avg_speed'])
        });
     circle.transition()
        .duration(2000)
        .attr({
            'fill': fill_color
        });

    if(ttip_text){
        var tooltip = d3.select("#tooltip")
        circle.on("mouseover", function(d){
            tooltip.html(ttip_text);
            tooltip.style({
                "display":"block",
                "top":(d3.event.pageY - 20)+"px",
                "left":(d3.event.pageX + 10)+"px"});
            })
            .on("mouseout", function(d){
                tooltip.style("display", "none");
                tooltip.empty();
            });
    }
}