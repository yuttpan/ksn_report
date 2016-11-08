app.config(function($routeProvider) {
    $routeProvider
    /*.when("/personcheck1", {
        templateUrl : "pages/Person/person_check1.html",
         controller : "personchk1Ctrl"
    })
    .when("/personcheck2", {
        templateUrl : "pages/Person/person_check2.html",
         controller : "personchk2Ctrl"
    })
    .when("/personcheck3", {
        templateUrl : "pages/Person/person_check3.html",
         controller : "personchk3Ctrl"
    })
    */
     .when("/personcheck/:id", {
        templateUrl : "pages/Person/person_chk.html",
         controller : "personchkctrl"
    })

}); 
    


app.controller('personCtrl', function ($scope, $http,mainService) {

console.log("Person")


$http.get("http://localhost/ksn_report/api/getPerson.php")
   .then(
       function(response){
         console.log(response.data)
$scope.PersonData = response.data ;
       }, 
       function(response){
         console.log(response)
       }
    );

});

app.controller('personCheckCtrl', function ($scope, $http,mainService) {

console.log("PersonCheck")





$http.get("http://localhost/ksn_report/api/getPersonCheck.php")
   .then(
       function(response){
         console.log(response.data)
$scope.Personerror = response.data ;
       }, 
       function(response){
         console.log(response)
       }
    );
  




});


app.controller('personchk1Ctrl', function ($scope, $http) {
console.log("CHECK1")
$http.get("http://localhost/ksn_report/api/getPersonCheck1.php")
   .then(
       function(response){
         console.log(response.data)
$scope.PersonCheck1 = response.data ;
       }, 
       function(response){
         console.log(response)
       }
    )

});

app.controller('personchk2Ctrl', function ($scope, $http) {
console.log("CHECK2")
$http.get("http://localhost/ksn_report/api/getPersonCheck2.php")
   .then(
       function(response){
         console.log(response.data)
$scope.PersonCheck2 = response.data ;
       }, 
       function(response){
         console.log(response)
       }
    )

});

app.controller('personchk3Ctrl', function ($scope, $http) {
console.log("CHECK3")
$http.get("http://localhost/ksn_report/api/getPersonCheck3.php")
   .then(
       function(response){
         console.log(response.data)
$scope.PersonCheck3 = response.data ;
       }, 
       function(response){
         console.log(response)
       }
    )

});



app.controller('personchkctrl',function($scope,$http,$routeParams,mainService){



  
var d = $routeParams ;

//console.log(data)
 $scope.PersonChk = function(data){
    
console.log(data)
mainService.getPersonChk(data).success(function($data){
  $scope.personChk = angular.extend($data);
console.log($scope.personChk);

})
   }
$scope.PersonChk(d);
//$scope.p = $scope.personChk.name ;


});
