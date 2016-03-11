
dinnerPlannerApp.controller('PrintCtrl', function ($scope,Dinner,$location) {

	$scope.menu = Dinner.getFullMenu();

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

 

  $scope.dishPrice = function(dish){
    return Dinner.getDishPrice(dish);
  }


  $scope.menuPrice = function(){
  	return Dinner.getTotalMenuPrice();
  }


}