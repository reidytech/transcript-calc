var creditApp = angular.module('creditApp', ['ngRoute']);

creditApp.value("CourseCollection", []);

creditApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home',
     {
       controller:'CreditController',
       templateUrl: 'templates/index.html'
     })
    .when('/english',
      {
        controller: 'EnglishController',
        templateUrl: 'templates/english.html'
      })
      .when('/math',
      {
        controller: 'MathController',
        templateUrl:'templates/math.html'
      })
      .when('/history',
      {
        controller: 'HistoryController',
        templateUrl:'templates/history.html'
      })
      .when('/science',
      {
        controller: 'ScienceController',
        templateUrl:'templates/science.html'
      })
      .otherwise({redirectTo: 'home'});
}]);
