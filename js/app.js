(function () {

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.checkFood = function() {
      var items;

      if ($scope.input) {
        $scope.input = $scope.input.trim();
        items = $scope.input.split(",");
        items = items.filter(function(item) {
          return item.length > 0;
        });
        if (items.length <= 3) {
          $scope.message = "Enjoy!";
            $scope.messageClass ="success-message";
            $scope.border = "border-green";
        } else {
          $scope.message = "Too much!";
          $scope.messageClass ="warning-message";
         $scope.border = "border-orange";
        }
      } else {
        $scope.message = "Please enter data first";
          $scope.messageClass ="error-message";
          $scope.border = "border-red";
      }
    }
  }

})();
