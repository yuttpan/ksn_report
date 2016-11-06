

app.controller('OpdCtrl', function ($scope, $http,mainService) {
$scope.name = "OPD" ;
console.log("MAIN")
$scope.form = {};
$scope.monthList = [
     {

        name : 'ตุลาคม',
        value : '10'
         
     },
     {
 name : 'พฤศจิกายน',
        value : '11'

     },
     {
 name : 'ธันวาคม',
        value : '12'

     },
     {
 name : 'มกราคม',
        value : '01'

     },
     {
 name : 'กุมภาพันธ์',
        value : '02'

     },
      {
 name : 'มีนาคม',
        value : '03'

     },
      {
 name : 'เมษายน',
        value : '04'

     },
      {
 name : 'พฤษภาคม',
        value : '05'

     },
      {
 name : 'มิถุนายน',
        value : '06'

     },
      {
 name : 'กรกฎาคม',
        value : '07'

     },
      {
 name : 'สิงหาคม',
        value : '08'

     },
      {
 name : 'กันยายน',
        value : '09'

     }


 ]

$scope.yearList = [{name : '2559',value : '2016'},{ name : '2560',value : '2017'}];

 
   $scope.OpdService = function(input){
    
console.log($scope.form)
mainService.OpdService($scope.form).success(function($data){
  $scope.OpdData = angular.extend($data);
console.log($scope.OpdData);

})
   }
})