/* fintechru.org (c) 2017 */
$(document).ready(function(){

  // Select and loop the container element of the elements you want to equalise
  $('.ft-equalheight-container').each(function(){

    // Cache the highest
    var highestBox = 0;

    // Select and loop the elements you want to equalise
    $('.ft-equalheight-element', this).each(function(){

      // If this box is higher than the cached highest then store it
      if($(this).height() > highestBox) {
        highestBox = $(this).height();
      }
    });

    // Set the height of all those children to whichever was highest
    $('.ft-equalheight-element',this).height(highestBox);
  });
});
