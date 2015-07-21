
function show_screen(number) {
    $("#next").fadeOut();
    $("#screen_content p").remove();
    $("#screen_content").prepend($("#screen_" + number).html());
}
var margin_scplt = {top: 5, right: 0, bottom: 35, left: 20}
var width = 400 - margin_scplt.left - margin_scplt.right,
    height = 300 -  margin_scplt.top -  margin_scplt.bottom;

var x_scale_func = d3.scale.linear()
    .range([0, width])
    .domain([0,45]);

var y_scale_func = d3.scale.linear()
    .range([height, 0])
    .domain([9, 12]);

var x_axis = d3.svg.axis()
    .scale(x_scale_func)
    .orient("bottom");

var y_axis = d3.svg.axis()
    .scale(y_scale_func)
    .orient("left");

function add_next(timeout) {
    setTimeout(function(){
        $('#next').fadeIn();
    }, timeout);
}
