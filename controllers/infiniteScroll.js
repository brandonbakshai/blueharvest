angular.module('home')
.controller('tileController', ['$scope', function($scope) {
    console.log("tileController runs");
    $scope.bounties = [];
    // function to fetch data from the server
    // in json form and populate tiles with the data
    $scope.fetchData = function() {
        console.log("fetchData runs");
        $.ajax({
            url: '/bounties',
            type: "GET",
            dataType: "json",
            success: function (data) {
                $scope.bounties = ($scope.bounties).concat(data);
                $scope.$apply();
                console.log($scope.bounties);
            }
        });
    };
    $scope.fetchData();
    $scope.register = function() {
            $('#right').bind('scroll', function(){
                if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight){
                    $scope.fetchData();
                }
            });
    };
    $scope.register();
}]);
