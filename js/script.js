$('.thumb').click(function(e){
    e.preventDefault();
})

$('.btn').click(function(){
    let thisThumb = $(this).parent()

    //'Will' toggle ;)
    if(thisThumb.hasClass("open")){
        //Sluiten
        thisThumb.removeClass("open")

        
        setTimeout(function(){
            thisThumb.css({'z-index' : 0})
        }, 1000);

    }else{
        //Openen
        thisThumb.addClass('open')
        thisThumb.css({'z-index' : 1})

    }
})
