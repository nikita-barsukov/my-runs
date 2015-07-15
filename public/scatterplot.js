function add_to_scatterplot(d, ttip_text) {
    var circle = scatterplot.append("circle")
        .attr("r",5)
        .attr("cx",x_scale_func(d['distance']))
        .attr("cy",y_scale_func(d['avg_speed']))

    if(ttip_text){
        var tooltip = $("#tooltip")
        circle.attr('class', 'important')
        circle.on("mouseover", function(d){
                tooltip.css("display", "block");
                tooltip.html(ttip_text);
                tooltip.css("top", (d3.event.pageY - 20)+"px")
                    .css("left",(d3.event.pageX + 10)+"px");
            })
            .on("mouseout", function(d){
                tooltip.css("display", "none");
                tooltip.empty();
            });       }
}