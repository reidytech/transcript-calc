creditApp.controller('CreditController', function($scope, fCsv){
  
 $scope.getCsv = function(){ 
  $http.get('csv/student-list/student-list.csv').then(function(resp) {
    var myJsonString = fCsv.toJson(resp.data);
    console.log(myJsonString);
   });
 };
  $scope.heightDiff;
});

creditApp.controller('EnglishController', ['$scope', 'CourseConstructor', function($scope, CourseConstructor){
$scope.en1 = new CourseConstructor("en1", false, "English 1", 5, "English");
$scope.en2 = new CourseConstructor("en2", false, "English 2", 5, "English");
$scope.en3 = new CourseConstructor("en3", false, "English 3", 5, "English");
$scope.en4 = new CourseConstructor("en4", false, "English 4", 5, "English");
}]);


creditApp.controller('MathController', ['$scope', 'CourseConstructor', function($scope, CourseConstructor){
$scope.ma1 = new CourseConstructor("al1", false, "Algebra 1", 5, "Mathematics");
$scope.ma2 = new CourseConstructor("geo", false, "Geometry", 5, "Mathematics");
$scope.ma3 = new CourseConstructor("al3", false, "Algebra 2", 5, "Mathematics");
$scope.ma4 = new CourseConstructor("adv", false, "Advanced Math", 5, "Mathematics");

}]);

creditApp.controller('HistoryController', ['$scope', 'CourseConstructor', function($scope, CourseConstructor){
$scope.his1 = new CourseConstructor("us1", false, "US History 1", 5, "History");
$scope.his2 = new CourseConstructor("us2", false, "US History 2", 5, "History");
$scope.his3 = new CourseConstructor("wh", false, "World History", 5, "History");
}]);


creditApp.controller('ScienceController', ['$scope', 'CourseConstructor', function($scope, CourseConstructor){
$scope.sci1 = new CourseConstructor("bio", false, "Biology", 5, "Science");
$scope.sci2 = new CourseConstructor("chem", false, "Chemistry", 5, "Science");
$scope.sci3 = new CourseConstructor("phy", false, "Physics", 5, "Science");
}]);

creditApp.controller('HealthController', ['$scope', 'CourseConstructor', function($scope, CourseConstructor){
$scope.he1 = new CourseConstructor("he1", false, "Health 1", 2.5, "Science");
$scope.he2 = new CourseConstructor("he2", false, "Health 2", 2.5, "Science");
}]);

creditApp.controller('GymController', ['$scope', 'CourseConstructor', function($scope, CourseConstructor){
$scope.gy1 = new CourseConstructor("pf", false, "Personal Fitness", 2.5, "Gym");
$scope.gy2 = new CourseConstructor("ta", false, "Team Activities PE", 2.5, "Gym");
}]);

creditApp.controller('ArtController', ['$scope', 'CourseConstructor', function($scope, CourseConstructor){
$scope.ar1 = new CourseConstructor("ca", false, "Computer Art", 2.5, "Art");
$scope.ar2 = new CourseConstructor("ce", false, "Ceramics", 2.5, "Art");
}]);