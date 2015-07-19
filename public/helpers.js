
function show_screen(number) {
    $("#next").remove();
    $("#screen_content").empty();
    $("#screen_content").html($("#screen_" + number).html());
}
var margin_scplt = {top: 5, right: 0, bottom: 25, left: 20}
var width = 400 - margin_scplt.left - margin_scplt.right,
    height = 400 -  margin_scplt.top -  margin_scplt.bottom;

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
        $('#screen_content').append('<p id="next"><a href="#">Next</a></p>');
        $("#next").click(function(e){
            if(SCREEN_NUMBER < MAX_SCREENS){
                SCREEN_NUMBER = SCREEN_NUMBER + 1;
                window["show_screen_" + SCREEN_NUMBER]();
                $("progress").val(100 * SCREEN_NUMBER / MAX_SCREENS);
            }
            e.preventDefault();
        });
    }, timeout);
}
