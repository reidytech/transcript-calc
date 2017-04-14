var creditApp = angular.module('creditApp', ['fCsv', 'ui.router', 'ngAnimate', 'formly']);

creditApp.value("CourseCollection", []);

creditApp.run(['$state', function ($state) {
   $state.transitionTo('home');
}]);


creditApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", 
     {
       controller:'CreditController',
       templateUrl: 'templates/home.html'
     })
   $stateProvider.state('english', 
      {
        controller: 'EnglishController',
        templateUrl: 'templates/english.html'
      })
   $stateProvider.state('math', 
      {
        controller: 'MathController',
        templateUrl:'templates/math.html'
      })
    $stateProvider.state('history', 
      {
        controller: 'HistoryController',
        templateUrl:'templates/history.html'
      })
    $stateProvider.state('science',
      {
        controller: 'ScienceController',
        templateUrl:'templates/science.html'
      })
      $urlRouterProvider.otherwise("home");
}]);
