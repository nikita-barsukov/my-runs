
function draw_map(d, t, pan){
    gjson = JSON.parse(d['geojson'])
    d3.selectAll("#path_" + d['id']).remove()
    c = turf.centroid(gjson)['geometry']['coordinates'];
    if(pan){
        map.panTo(new L.LatLng(c[1], c[0]))
    }
    function transition(p) {
        p.transition()
            .duration(t)
            .attrTween("stroke-dasharray", tweenDash)
            .style("stroke-opacity", 0.4);
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
        .style("stroke-opacity", 1)
        .call(transition);

    map.on("viewreset", function() {
        feature.attr({
            "d":path,
            "stroke-dasharray": ''
        })
    })
}

function show_screen(number) {
    $(".screen").fadeOut(function(){ $("#screen_" + number).fadeIn(); });
}
