
function draw_map(d, t, pan){
    c = turf.centroid(d['geojson'])['geometry']['coordinates'];
    if(pan){
        map.panTo(new L.LatLng(c[1], c[0]))
    }
    function transition(p) {
        p.transition()
            .duration(t)
            .attrTween("stroke-dasharray", tweenDash);
    }

    function tweenDash() {
        var l = feature.node().getTotalLength();
        var i = d3.interpolateString("0," + l, l + "," + l);
        return function(t) {
            return i(t)
        }
    }

    var feature = g.append("path")
        .datum(d['geojson'])
        .attr({
            "id": "path_" + d['id'],
            "d":path
        })
        .call(transition);

    map.on("viewreset", function() {
        feature.attr({
            "d":path,
            "stroke-dasharray": ''
        })
    })
}

function show_screen(number) {
    $(".screen").fadeOut(2000)
    $("#screen_" + number).fadeIn(3000);
}
