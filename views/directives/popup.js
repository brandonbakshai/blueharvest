// ****BUILDING THE POPUP DIV, WHICH IS VISIBLE AFTER CLICKING ON A BOUNTY TILE****

// this function makes use of the navigation Ar
function buildPopup() {
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
    var tagline = "A web app to connect people with ideas to those with the technical ability to develop them."
    var descrip = "";
    var stats = ["projects: 0", "contributors: 0", "up/downvotes: 0/0", "views: 0", "category: programming", "types: civil"];
    var langs = ["Languages", "JavaScript", "Python"];

    var openModNavTitle = '<div class="bounty_clz_0">';
    var openModNavItem = '<div class="bounty_clz_1">';
    var openModDivContainer = '<div class="bountyContainer">';

    popStr.push(openContainMe);
        popStr.push(openOverlay);

            popStr.push(openBountyNav);

                popStr.push(openModNavTitle);
                popStr.push("Filter By");
                popStr.push(closeDiv);

                popStr.push(openModNavTitle);
                popStr.push("Ascending");
                popStr.push(closeDiv);

                popStr.push(openModNavTitle);
                popStr.push("Descending");
                popStr.push(closeDiv);

                popStr.push(openModDivContainer);

                    popStr.push(openModNavItem);
                    popStr.push("Contributors");
                    popStr.push(closeDiv);

                    popStr.push(openModNavItem);
                    popStr.push("Projects");
                    popStr.push(closeDiv);

                    popStr.push(openModNavItem);
                    popStr.push("Views");
                    popStr.push(closeDiv);

                    popStr.push(openModNavItem);
                    popStr.push("Up:Down");
                    popStr.push(closeDiv);

                popStr.push(closeDiv);

                popStr.push(openModNavTitle);
                popStr.push("Projects");
                popStr.push(closeDiv);

                popStr.push(openModDivContainer);
                popStr.push(closeDiv);


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
                            if (i === 2 && j < langs.length) {
                                popStr.push(langs[j]); 
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

    return popStr.join('');
}


angular.module('home')
    
// this is creating another html tag "popup" 
.directive('popup', function() {
    return {
        // see below          
        template: buildPopup()
    };
});

