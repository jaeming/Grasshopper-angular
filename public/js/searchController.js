grasshopper.controller('SearchController', function($scope, $http, $state, $stateParams, Message, $window) {
  $scope.search = function(){
    $http({method: 'GET', url: "http://grasshopperapi.herokuapp.com/search?q=" + $scope.search.query}).success(function(data) {
      $scope.results = data;
    });
  }
});