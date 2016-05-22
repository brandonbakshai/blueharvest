(function(){
    var app = angular.module('home', []);
    app.controller('HomeController', function($scope) {
        this.navBar = navBar;
        this.aggregated = aggregated;
        console.log("I am running");
        $scope.myData = {};
        $scope.myData.mouseEnter = function(event) {
            var el = document.getElementById(event.target.id);
            console.log("mouseEnter()");
            el.style.backgroundColor = '#aabbcc';
        };
        $scope.myData.mouseLeave = function(event) {
            var el = document.getElementById(event.target.id);
            console.log("mouseLeave()");
            el.style.backgroundColor = '#778899';
        };
        $scope.myData.mouseClick = function(event) {
            console.log("mouseClick");
            var header = document.getElementById(event.target.id);

            //getting the next element
            var content = header.nextSibling;
            if (content.classList.contains("container")) {
                console.log("found a container div");
                //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
                jQuery(content).slideToggle(200);
            }
        };
        $scope.myData.mouseEnterNav = function(event) {
            var id = event.target.id;
            if (((id === 'nav') || (id === 'navis'))) {
                $('#findMe.container').slideToggle(50);
            }

        };
            
        $scope.myData.mouseLeaveNav = function(event) {
            var id = event.target.id;
            if ((id === 'findMe') || (id === 'nav') || (id === 'navis')) {
                console.log($('#findMe.container').css('visibility'));
                $('#findMe.container').slideToggle(50);
            }
        }

        $scope.myData.mouseClickExpand = function(event) {
            if (event.target.id === 'test_tile') {
                var elem = document.getElementById(event.target.id);
                $(elem).width("100%");
                $(elem).height(window.innerHeight);
            }
        }
    });

    app.directive('filters', function() {
          return {
                  template: str.join('')
          };
    });

    app.directive('navigation', function() {
          return {
                  template: navStr.join('')
          };
    });


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

        var navigationArr = ['BH', 'HB', 'HB', 'HB', 'HB', 'HB', 'HB'];
        var navStr = [];
        var openNav = '<div id="navis">';
        var openDiv = '<div id="naves">';
        var openContainer = '<div id="findMe" class="container">';
        var closeDiv = '</div>';

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
        
        buildNavigation();
    
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
        function beginNested(arra) {
            return buildNested(arra, 0, 0);
        }

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

    beginNested(arr);

    var aggregated = [];

    // there are free web apps which will format this
    // json object nicely, I have compressed it for readability
    var navBar =
        {"Category":[{"Programming":[{"Civil":[]},{"Entertainment":[]},{"Social":[]},
        {"Games":[]},{"Science":[]},{"Utilities":[]},
        {"API":[{"Facebook":[]},{"Google":[]},{"Spotify":[]},{"Twitter":[]},{"LinkedIn":[]},{"Amazon":[]}]}]},
        {"Writing":[{"Horror":[]},{"Mystery":[]},{"SciFi":[]},{"FanFic":[]}]}]};

    aggregateJSON(navBar);

})();

    
