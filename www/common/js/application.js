var coachMarketPlace = angular.module("coachMarketPlaceApp", ["ui.router" , 'ui.bootstrap']);

coachMarketPlace.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');    
    $stateProvider
        // login view definition
        .state("login", {
            url:'/login',
            controller: "loginController",
//            controllerAs: "vm",
            templateUrl: "login/views/login.html",
            ncyBreadcrumb: {
              label: 'Login page'
            }
             
        })
    }]);