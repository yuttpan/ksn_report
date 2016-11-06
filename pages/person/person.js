app.config(function($routeProvider) {
    $routeProvider
    .when("/personcheck1", {
        templateUrl : "pages/Person/person_check1.html",
         controller : "personchk1Ctrl"
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