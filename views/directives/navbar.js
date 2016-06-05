angular.module('home')

// this is creating another html tag "navigation" which is used 
// for the red bar
.directive('navigation', function() {
    return {
        // see below          
        template: buildNavigation()
    };
});

// ****BUILDING THE NAVIGATION PART OF THE SITE, THE RED DROPDOWN MENU****
    
// this function makes use of the navigation Ar
function buildNavigation() {
    // data structure to hold what will go into the div structure we are
    // building
    var navigationArr = ['BH', 'HB', 'HB', 'HB', 'HB', 'HB', 'HB'];
    var navStr = [];
    var openNav = '<div id="navis">';
    var openDiv = '<div id="naves">';
    var openContainer = '<div id="findMe" class="container">';
    var closeDiv = '</div>';

    for (elem in navigationArr) {
        var tru = navigationArr[elem];
        if (tru === 'BH') {
            navStr.push(openNav);
            navStr.push(tru);
            navStr.push(closeDiv);
            navStr.push(openContainer);
        } else {
            navStr.push(openDiv);
            navStr.push(tru);
            navStr.push(closeDiv);
        }
    }
    navStr.push(closeDiv);

    return navStr.join('');
}

