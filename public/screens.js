function show_screen_1(){
    show_screen(1);
}
function show_screen_2(){
    show_screen(2);
    [9,10,1,2,3,4].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 5000, false)
        })
    })
    //queue()
    //    .defer(d3.json, '/workout/9')
    //    .defer(d3.json, '/workout/10')
    //    .await(function(error, d1, d2){
    //        draw_map(d1, 5000, true);
    //        setTimeout(function(){
    //            draw_map(d2, 2000, true)
    //        }, 5000)
    //    });
}