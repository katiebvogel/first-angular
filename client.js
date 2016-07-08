angular.module('ToDoListApp', [] );

angular.module('ToDoListApp').controller('MainController', function($scope){

var itemList = [];

$scope.handleClick = function(){

  itemList.push($scope.toDo);
}

$scope.itemList = itemList;

$scope.removeItem= function(item){
  console.log(item);
  itemList.splice(itemList.indexOf(item), 1);
}

// $scope.done = false;

var toRemoveArray = [];
$scope.toRemoveArray = toRemoveArray;
$scope.checkedItem = function(item){
  console.log(item);
  $scope.toRemoveArray.push(item);
  console.log($scope.toRemoveArray)
}



$scope.bigRemoveClick = function(toRemoveArray){
  for (var i=0; i< $scope.toRemoveArray.length;  i++){
  itemList.splice($scope.toRemoveArray[i], 1);
}
}

})
