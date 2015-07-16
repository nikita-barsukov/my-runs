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
            draw_map(d, 3000, false)
            add_to_scatterplot(d)
        })
    })
    setTimeout(function(){
        d3.json('/workout/22', function(d){
            draw_map(d, 5000, true)
            add_to_scatterplot(d, "19 km along the sea during storm")
        })
    }, 3000)
}

function show_screen_4(){
    show_screen(4);
    [11,12,13,14,16,17,18,27].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 3000, id == 11)
            add_to_scatterplot(d)
        })
    })
    setTimeout(function(){
        [30,31,32,23,25,25].forEach(function(id){
            d3.json('/workout/' + id, function(d){
                draw_map(d, 3000, id ==25)
                if(id!=25){
                    add_to_scatterplot(d)
                } else {
                    add_to_scatterplot(d,"25 km run with desent speed and BBC Essential mixes playing in headphones." )
                }
            })
        })
    }, 3000)
}

function show_screen_5(){
    show_screen(5);
    [26,28,29,39,40,41,42,33].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 3000, false)
            add_to_scatterplot(d)
        })
    })
    setTimeout(function(){
        d3.json('/workout/34', function(d){
            draw_map(d, 3000, true)
            add_to_scatterplot(d,"Longest run during this training session" )
        })
    }, 3000)
}
function show_screen_6(){
    show_screen(6);
    [35,53,36,37,38,49,50].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 3000, false)
            if(id!=37){
                add_to_scatterplot(d)
            } else {
                add_to_scatterplot(d,"Surprisingly fast 15 km for me, broke 1h 25m" )
            }
        })
    })
}
function show_screen_7(){
    show_screen(7);
    [51,52,43,44,45].forEach(function(id){
        d3.json('/workout/' + id, function(d){
            draw_map(d, 3000, false)
            add_to_scatterplot(d)
        })
    })
    setTimeout(function(){
        d3.json('/workout/54', function(d){
            draw_map(d, 5000, true)
            add_to_scatterplot(d, "Picturesque run along the sea shore in Malmo")
        })
    }, 3000)
    setTimeout(function(){
        [46,47].forEach(function(id){
            d3.json('/workout/' + id, function(d){
                draw_map(d, 3000, id ==46)
                add_to_scatterplot(d)
            })
        })
    }, 8000)
}
function show_screen_8(){
    show_screen(8);
    d3.json('/workout/48', function(d){
        draw_map(d, 8000, true)
        add_to_scatterplot(d, "Copenhagen marathon, May 24th, 2015")
        map.panTo(new L.LatLng(55.646098, 12.558337))
        map.setZoom(12, {animate: true})
    })

}

