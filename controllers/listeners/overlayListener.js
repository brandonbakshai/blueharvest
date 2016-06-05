// add the click listener for the bounty tiles,
// so that on click the larger more descriptive
// bounty tile will popup
$('.test_tile').click(function() {
    $('#overlay, #overlay-back').fadeIn(250, function() {
        // callback function for testing
        console.log("This executed")
    }); 
});

// add click listener to the darkened background
// will fadeOut the descriptive bounty module and go
// back to the rows of tiles
$('#overlay-back').click(function(e) {
    if (e.target.id != 'overlay') {
        $('#overlay, #overlay-back').fadeOut(250, function() {
            console.log("This executed")
        }); 
    }
});
