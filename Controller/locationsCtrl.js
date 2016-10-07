angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
$scope.theTravelInfo = mainSrv.travelInfo;
});
