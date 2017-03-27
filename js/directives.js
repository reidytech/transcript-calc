creditApp.directive('parentDirective', function(Resource, $compile){
  return {
    restrict: 'E',
    link: function(scope, elem, attrs){
      Resource.loadData().then(function(result){
        scope.data = result.data;
        var htm = '<child-directive></child-directive>';
        var compiled = $compile(htm)(scope);
        elem.append(compiled);
      });
    }
  }
});

creditApp.directive('childDirective', function(){
  return {
    restrict: 'E',
    template: '<div>Content: {{data.key}}</div>'
  }
});



creditApp.directive('creditDirective', function($compile){
  return {
    restrict: 'E',
    link: function(scope, elem, attrs){
    var htm = '<child-directive></child-directive>';
    var compiled = $compile(htm)(scope);
    template: '<div>Content: {{creditvalue}}</div>'
    }
  }
});

/*creditApp.directive('heightSync', function(){
  function link(scope, element, attrs){
    scope.watch(function(){
      scope.heightDiff = {
        height:element[0].offsetheight + 'px',
      };
    });
  }
  return {
    restrict: 'AE',
    link: link
  }
}); */

creditApp.directive('master',function () { //declaration; identifier master
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
      scope.$watch(function(){ //watch any changes to our element
        scope.style = { //scope variable style, shared with our controller
            height:element[0].offsetHeight+'px', //set the height in style to our elements height
            //width:element[0].offsetWidth+'px' //same with width
          };
      });
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
});


creditApp.factory('Resource', function($http){
  var Resource = {};

  Resource.loadData = function(){
    return $http.get('test.json');
  }

  return Resource;
})
