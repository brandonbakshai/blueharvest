angular.module('home')

.directive('filters', function() {
      return {
              template: beginNested()
      };
});

var str = [];

function beginNested() {
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


    buildNested(arr, 0, 0);

    return str.join('');
}

function buildNested(arra, idx, levl) {
    var divOpenOne = '<div ng-mouseenter="myData.mouseEnter($event)" ng-mouseleave="myData.mouseLeave($event)" ng-click="myData.mouseClick($event)" id="';
    var divOpenTwo = '" class="clz_';
    var divOpenThree = '">';
    var divClose = '</div>';
    var divContainerOpen = '<div class="container">';

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
