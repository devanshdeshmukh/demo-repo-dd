let inp = document.quarySelector("input");

inp.addEventListner("input", function(dets){
    if(dets.data !== null){
        console.log(dets.data);
    }
});