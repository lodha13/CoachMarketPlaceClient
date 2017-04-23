coachMarketPlace.controller("loginController",['appData','$scope',
 function(appData, $scope, $location, loginService,$facebook,$http) {
    
     $scope.isLogin=true;
     $scope.login ={};
     $scope.login.username = "lodha";
     $scope.login.password = "password";
     $scope.login.userType = "superadmin";


    }]);

 