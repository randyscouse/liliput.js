 function liliput($selector,$nativeWidth,$breakpoint){
        nativeWidth = $nativeWidth;  // width of the artboard
        //console.log("native width is "+nativeWidth);
        currentWidth = jQuery(window).width();
        console.log("current width is "+currentWidth);
        currentViewportWidth = currentWidth/nativeWidth;
        viewportWidthAsPercent = currentViewportWidth*100;
        if((currentWidth<nativeWidth)&&(currentWidth>$breakpoint)){
        jQuery($selector).css({'font-size': viewportWidthAsPercent+"%"})        
        }
        else{
        jQuery($selector).css({'font-size': "100%"})        
      }
