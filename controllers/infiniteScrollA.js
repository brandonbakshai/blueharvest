$( document ).ready(function() {
    // function to fetch data from the server
    // in json form and populate tiles with the data
    function fetchData() {
        $.ajax({
            url: 'http://uinames.com/api/?amount=24',
            // url: './testing.json',
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var openDivRight = '<div id="right">';
                var openDivTile = '<div class="test_tile">';
                var openDivTitle = '<div class="test_tile_title">';

                var openDivProj = '<div class="openDivProj">';
                var openDivContr = '<div class="openDivContr">';
                var openDivUp = '<div class="openDivUp">';
                var openDivDown = '<div class="openDivDown">';

                var openDivTag = '<div class="openDivTag">';
                var openDivDescrip = '<div class="openDivDescrip">';

                var closeDiv = '</div>';
                var eachTile = [];

                // dummy variables to be passed by json
                var numProj = 0;
                var numContr = 0;
                var numUp = 0;
                var numDown = 0;
                var tag = "A web app to connect people with ideas to those with the technical ability to develop them."
                var authors = "Ishan Guru, Brandon Bakhshai";

                // iterate over all 24 elements
                for (elem in data) {
                    var iter = data[elem]
                    var temp = [];

                    // create tile for each item
                    temp.push(openDivTile);
                    temp.push(openDivTitle);

                    temp.push(openDivProj);
                    temp.push("proj: ");
                    temp.push(numProj);
                    temp.push(closeDiv);

                    temp.push(openDivContr);
                    temp.push("contr: ");
                    temp.push(numContr);
                    temp.push(closeDiv);

                    temp.push(openDivUp);
                    temp.push("up: ");
                    temp.push(numUp);
                    temp.push(closeDiv);

                    temp.push(openDivDown);
                    temp.push("down: ");
                    temp.push(numDown);
                    temp.push(closeDiv);


                    temp.push(closeDiv);

                    temp.push(openDivTag);
                    temp.push("Tagline: ");
                    // temp.push(iter["name"]);
                    temp.push(tag);
                    temp.push(closeDiv);

                    temp.push(openDivDescrip);
                    temp.push("Author(s): ");
                    temp.push(authors);
                    temp.push(closeDiv);

                    temp.push(closeDiv);

                    console.log(temp.join(''));
                    eachTile.push(temp.join(''));
                }
                // append all the new tiles to the set of existing
                // tiles
                $('#right').append(eachTile.join(''));

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
            }
        });
    }

    // run once to populate site with initial data
    fetchData();


    // function to determine when the user has scrolled to the
    // of the window and fetch more data.
    $('#right').bind('scroll', function(){
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight){
            fetchData();
        }
    });
}); 
