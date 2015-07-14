function show_screen_1(){
    show_screen(1);
}
function show_screen_2(){
    show_screen(2);
    [10,1,2,3,4].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 5000, false)
        })
    })
}

function show_screen_3() {
    show_screen(3);
    [5,6,7,8,15,21].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 5000, false)
        })
    })
    setTimeout(function(){
        d3.json('/workout/22', function(d){
            draw_map(d, 5000, true)
        })
    }, 5000)
}
