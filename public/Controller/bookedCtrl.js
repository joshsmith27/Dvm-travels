angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

  $scope.id = $stateParams.id;
  $scope.selectedPack = mainSrv.travelInfo;
  for(var i = 0; i < $scope.selectedPack.length; i++ ){
    if($scope.selectedPack[i].id == $scope.id){
      $scope.info = $scope.selectedPack[i];
    }
  }
  $scope.backgroundImg = {
    'background-image': 'url('+$scope.info.image+')'
  };
});
