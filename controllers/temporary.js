angular.module('home')
.controller('HomeController', function($scope) {
    // this.navBar = navBar;
    // this.aggregated = aggregated;
    $scope.myData = {};

    // mouseEnter listener to highlight div
    $scope.myData.mouseEnter = function(event) {
        var el = document.getElementById(event.target.id);
        console.log("mouseEnter()");
        el.style.backgroundColor = '#aabbcc';
    };

    // mouseLeave listener to undo what was done by the above
    // mouseEnter listener
    $scope.myData.mouseLeave = function(event) {
        var el = document.getElementById(event.target.id);
        console.log("mouseLeave()");
        el.style.backgroundColor = '#778899';
    };

    // mouseClick listener to collapse or expand items
    // from the blue nav bar
    $scope.myData.mouseClick = function(event) {
        console.log("mouseClick");
        var header = document.getElementById(event.target.id);

        // getting the next element which by construction
        // should be of class "container"
        var content = header.nextSibling;
        if (content.classList.contains("container")) {
            // collapse if expanded or expand if collapsed
            jQuery(content).slideToggle(200);
        }
    };

    // mouseEnter listener to make the red menu dropdown
    $scope.myData.mouseEnterNav = function(event) {
        var id = event.target.id;
        if (((id === 'nav') || (id === 'navis'))) {
            $('#findMe.container').slideToggle(50);
        }

    };

    $scope.myData.mouseLeaveNav = function(event) {
        var id = event.target.id;
        if ((id === 'findMe') || (id === 'nav') || (id === 'navis')) {
            // console.log($('#findMe.container').css('visibility'));
            // I select the element by id because it is possible the mouse
            // does not leave the proper container. It is possible the mouse
            // enters nav or navis but leaves from naves. I can elaborate
            // further in convo.
            $('#findMe.container').slideToggle(50);
        }
    }
});
