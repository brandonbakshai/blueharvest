angular.module('home')
.controller('tileController', function($scope) {
    console.log("tileController is in fact firing");
    $.ajax({
        url: '/bounties',
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log("successful");
            $scope.bounties = data;
            $scope.$apply();
        }
    });
});

