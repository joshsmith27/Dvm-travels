angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
  $scope.infoFromData = mainSrv.travelInfo;
});
