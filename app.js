// this is the main function where everything in the environment has to go
// as far as I know
(function(){
    // define app as the angular module we are building
    // what one builds in angular are modules, like python
    var app = angular.module('home', []);
    app.controller('HomeController', function($scope) {
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

        // listener to try to make a bounty tile expand with a nice animation 
        // to fill the right container on click. does not work but left this
        // in case we want to do something with it
        /*
        $scope.myData.mouseClickExpand = function(event) {
            if (event.target.id === 'test_tile') {
                var elem = document.getElementById(event.target.id);
                $(elem).width("100%");
                $(elem).height(window.innerHeight);
            }
        }
        */
    });

    // ****ANGULAR DIRECTIVES, OR RATHER HTML TAG CREATION****

    // this is creating an html "filters" tag that generates html based on the template
    // it returns (str.join('')).
    // This is used to dynamically generate the filtering menu bar at the left
    app.directive('filters', function() {
          return {
                  template: str.join('')
          };
    });

    // this is creating another html tag "navigation" which is used 
    // for the red bar
    app.directive('navigation', function() {
        return {
            // see below          
            template: navStr.join('')
        };
    });


    // this is creating another html tag "popup" 
    app.directive('popup', function() {
        return {
            // see below          
            template: popStr.join('')
        };
    });

    // -------------------------------------------------------


    // ****BUILDING THE NAVIGATION PART OF THE SITE, THE RED DROPDOWN MENU****
        
    // data structure to hold what will go into the div structure we are
    // building
    var navigationArr = ['BH', 'HB', 'HB', 'HB', 'HB', 'HB', 'HB'];
    var navStr = [];
    var openNav = '<div id="navis">';
    var openDiv = '<div id="naves">';
    var openContainer = '<div id="findMe" class="container">';
    var closeDiv = '</div>';

    // this function makes use of the navigation Ar
    function buildNavigation() {
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
    }
    
    // build the div we want, will be stored in "navStr"
    buildNavigation();

    // ------------------------------------------------------------------------

    // ****BUILDING THE FILTER MENU PART OF THE SITE, THE BLUE-GREY COLLAPSABLE MENU**** 

    // data structure from which we will build the div we want
    // note that it is an array with each element being a JSON
    // object, containing a name and level. originally I had an
    // actual json string and tried to parse that into what we need
    // but it was proving exceptionally difficult
    var arr = [{name: 'Category', lvl: 0},
    {name: 'Programming', lvl: 0},
    {name: 'Civil', lvl: 1},
    {name: 'Entertainment', lvl: 1},
    {name: 'Social', lvl: 1},
    {name: 'Games', lvl: 1},
    {name: 'Science', lvl: 1},
    {name: 'Utilities', lvl: 1},
    {name: 'APIs', lvl: 1},
    {name: 'Facebook', lvl: 2},
    {name: 'Google', lvl: 2},
    {name: 'Spotify', lvl: 2},
    {name: 'Twitter', lvl: 2},
    {name: 'LinkedIn', lvl: 2},
    {name: 'Amazon', lvl: 2},
    {name: 'Writing', lvl: 0},
    {name: 'Horror', lvl: 1},
    {name: 'Mystery', lvl: 1},
    {name: 'SciFi', lvl: 1},
    {name: 'FanFic', lvl: 1}];

    var str = [];
    var divOpenOne = '<div ng-mouseenter="myData.mouseEnter($event)" ng-mouseleave="myData.mouseLeave($event)" ng-click="myData.mouseClick($event)" id="';
    var divOpenTwo = '" class="clz_';
    var divOpenThree = '">';
    var divClose = '</div>';
    var divContainerOpen = '<div class="container">';

    // main function to build the div from our data structure
    function beginNested(arra) {
        return buildNested(arra, 0, 0);
    }

    // this helper function takes in the special "arr" data structure above and
    // generates divs for the collapsable/expandable filter menu
    function buildNested(arra, idx, levl) {
        if ((arra.length-1) == idx) {
            return ;
        }
        var curLevl = arra[idx].lvl;
        var add;
        if (idx + 1 < arra.length) {
            var nxLevl = arra[idx + 1].lvl;
            if (nxLevl > curLevl) {
                add = '*';
            }
        }
        if (curLevl > levl) {
            str.push(divContainerOpen);
        } else if (curLevl < levl) {
            var diff = levl - arra[idx].lvl;
            var newDivs = [];
            for (var i = 0; i < diff; i++) {
                newDivs.push(divClose);
            } 
            str.push(newDivs.join(''));
        }
        var temp = arra[idx].name;
        var tmp = [];
        tmp.push(divOpenOne);
        tmp.push(temp);
        tmp.push(divOpenTwo);
        tmp.push(curLevl + " navItem");
        tmp.push(divOpenThree);
        tmp.push(temp);
        if (add != undefined) {
            tmp.push(add);
        }
        tmp.push(divClose);
        str.push(tmp.join(''));
        buildNested(arra, idx+1, curLevl);
    }
    
    // build the div we want, will be stored in "str"
    beginNested(arr);

    // ------------------------------------------------------------------------

    // ****BUILDING THE POPUP DIV, WHICH IS VISIBLE AFTER CLICKING ON A BOUNTY TILE****

    var popStr = [];
    var openContainMe = '<div id="containMe">';
    var openOverlay = '<div id="overlay">';
    var openBountyNav = '<div class="bountyNav">';
    var openBountyRight = '<div class="bountyRight">';
    var openBountyStats = '<div class="bountyStats">';
    var openBountyTitle = '<div class="bountyTitle">';
    var openBountyAuthors = '<div class="bountyAuthors">';
    var openDescrip = '<div class="bountyDescrip">';
    var openStatModule = '<div class="statModule">';
    var openDescripModule1 = '<div class="descripModule1">';
    var openDescripModule2 = '<div class="descripModule2">';
    var openStatItem = '<div class="statItem">';
    var openStatTitle = '<div class="statTitle">';
    var openStatTitleItem = '<div class="statTitleItem">';
    var closeDiv = '</div>';
    var tagline = "tagline: A web app to connect people with ideas to those with the technical ability to develop them."
    var descrip = "";
    var stats = ["projects: 0", "contributors: 0", "upvotes: 0", "downvotes: 0", "views: 0", "category: programming", "types: civil"];
    var langs = ["languages", "JavaScript", "Python"];

    // this function makes use of the navigation Ar
    function buildPopup() {
        popStr.push(openContainMe);
            popStr.push(openOverlay);

                popStr.push(openBountyNav);
                popStr.push(closeDiv);

                popStr.push(openBountyRight);

                    popStr.push(openBountyStats);
                        popStr.push(openBountyTitle);
                        popStr.push("Bounty Statistics");
                        popStr.push(closeDiv);

                        for (var i = 0; i < 3; i++) {
                            popStr.push(openStatModule);
                            for (var j = 0; j < 5; j++) {
                                if (5*i+j < 10) {
                                    popStr.push(openStatItem);
                                } else if (5*i+j === 10) {
                                    popStr.push(openStatTitle);
                                } else {
                                    popStr.push(openStatTitleItem);
                                }
                                if ( 5*i+j < stats.length ) {
                                    popStr.push(stats[5*i+j]);
                                } 
                                if (10+langs.length > 5*i+j >= 10) {
                                    popStr.push(langs[5*i+j - 10]); 
                                }
                                popStr.push(closeDiv);
                            }
                            popStr.push(closeDiv);
                        }

                    popStr.push(closeDiv);

                    popStr.push(openDescrip);
                        popStr.push(openBountyTitle);
                        popStr.push("About");
                        popStr.push(closeDiv);

                        popStr.push(openDescripModule1);
                        popStr.push(tagline);
                        popStr.push(closeDiv);

                        popStr.push(openDescripModule2);
                        popStr.push(closeDiv);

                        popStr.push(openBountyAuthors);
                        popStr.push("Author(s): Ishan Guru, Brandon Bakhshai");
                        popStr.push(closeDiv);

                    popStr.push(closeDiv);

                popStr.push(closeDiv);

            popStr.push(closeDiv);
        popStr.push(closeDiv);
    }
    
    // build the div we want, will be stored in "popStr"
    buildPopup();

    /*
            <div id="containMe">
                <div id="overlay">
                    <div class="bountyNav"></div>
                    <div class="bountyRight">
                        <div class="bountyStats">
                            <div class="bountyTitle">Statistics</div>
                        </div>
                        <div class="bountyDescrip">
                            <div class="bountyTitle">Description</div>
                        </div>
                    </div>
                </div>
            </div>
    */

    // -------------------------------------------------------------------------


    /* 
    var aggregated = [];

    // there are free web apps which will format this
    // json object nicely, I have compressed it for readability
    var navBar =
        {"Category":[{"Programming":[{"Civil":[]},{"Entertainment":[]},{"Social":[]},
        {"Games":[]},{"Science":[]},{"Utilities":[]},
        {"API":[{"Facebook":[]},{"Google":[]},{"Spotify":[]},{"Twitter":[]},{"LinkedIn":[]},{"Amazon":[]}]}]},
        {"Writing":[{"Horror":[]},{"Mystery":[]},{"SciFi":[]},{"FanFic":[]}]}]};

     
    function aggregateJSON(jsonObj) {
        var tipe = isNaN(jsonObj);
        if ((jsonObj === undefined) || 
        (jsonObj.length === 0) || 
        (!tipe)) {
            return ;
        } else if (typeof(jsonObj) === "string") {
            aggregated.push(jsonObj);
            return ;
        } else {
            for (elem in jsonObj) {
                aggregateJSON(elem);
                aggregateJSON(jsonObj[elem]);
            }
        }
    }

    aggregateJSON(navBar);
    */

})();

    
