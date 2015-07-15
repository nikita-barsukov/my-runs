function show_screen_1(){
    show_screen(1);
}
function show_screen_2(){
    $("#scatterplot").fadeIn()
    show_screen(2);
    [10,1,2,3,4].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 5000, false)
            add_to_scatterplot(d)
        })
    })
}

function show_screen_3() {
    show_screen(3);
    [5,6,7,8,15,21].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 5000, false)
            add_to_scatterplot(d)
        })
    })
    setTimeout(function(){
        d3.json('/workout/22', function(d){
            draw_map(d, 5000, true)
            add_to_scatterplot(d, "19 km along the sea during storm")
        })
    }, 5000)
}
