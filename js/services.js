creditApp.factory('CourseConstructor', [function(){
    var CourseConstructor = function(id, met, name, credits, dept){
        this.initialize = function(){
            this.id = id;
            this.met = met;
            this.name = name;
            this.credits = credits;
            this.dept = dept;
            this.self = this;
        }
        this.initialize();
    };
    return (CourseConstructor);
}]);

/* Factory for $global service, $http is for $global request function */

creditApp.factory('$global', ['$http', function($http){
    
    var _urls = {
        transcriptCSV : 'https://127.0.0.1/csv',
        transcriptJSON : 'https://127.0.0.1/json'
    } //end urls
    
    return {
        request : function(url, vars){
            if(angular.isDefined(vars)){
                return $http.post(url, $.param(vars), {headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
            } else {
                return $http.get(url);
            }
        },

        url : function(which){
            return _urls(which);
        } //end url

    };
}]);
