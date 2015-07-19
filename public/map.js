function draw_map(d, t, pan, highlight){
    gjson = JSON.parse(d['geojson'])
    d3.selectAll("#path_" + d['id']).remove()
    var c = turf.centroid(gjson)['geometry']['coordinates'];
    var fill_color = highlight ? "#1e803d" : "red"
    var opacity = highlight ? 1 : 0.3

    if(pan){
        map.panTo(new L.LatLng(c[1], c[0]), {animate: true})
    }
    function transition(p) {
        p.transition()
            .duration(t)
            .attrTween("stroke-dasharray", tweenDash)
            .transition()
            .duration(500)
            .style({
                'stroke': fill_color,
                'opacity':opacity
            });

    }

    function tweenDash() {
        var l = feature.node().getTotalLength();
        var i = d3.interpolateString("0," + l, l + "," + l);
        return function(t) {
            return i(t)
        }
    }

    var feature = g.append("path")
        .datum(gjson)
        .attr({
            "id": "path_" + d['id'],
            'class': 'route',
            "d":path
        })
        .style({
            'stroke': 'blue',
            'opacity': 1
        })
        .call(transition);

    map.on("viewreset", function() {
        feature.attr({
            "d":path,
            "stroke-dasharray": ''
        })
    })
}