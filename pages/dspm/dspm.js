app.controller("dspmMainCtrl", function($scope,mainService) {

console.log("DSPM")
$scope.monthList = [
     {

        name : 'ตุลาคม',
        value : '2016-10-01'
         
     },
     {
 name : 'พฤศจิกายน',
        value : '2016-11-01'

     },
     {
 name : 'ธันวาคม',
        value : '2016-12-01'

     },
     {
 name : 'มกราคม',
        value : '2017-01-01'

     },
     {
 name : 'กุมภาพันธ์',
        value : '2017-02-01'

     },
      {
 name : 'มีนาคม',
        value : '2017-03-01'

     },
      {
 name : 'เมษายน',
        value : '2017-04-01'

     },
      {
 name : 'พฤษภาคม',
        value : '2017-05-01'

     },
      {
 name : 'มิถุนายน',
        value : '2017-06-01'

     },
      {
 name : 'กรกฎาคม',
        value : '2017-07-01'

     },
      {
 name : 'สิงหาคม',
        value : '2017-08-01'

     },
      {
 name : 'กันยายน',
        value : '2017-09-01'

     }


 ]
$scope.myDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
        theme: "ocean"
    },
    data:[{
        label: "Bakersfield Central",
        value: "880000"
    },
    {
        label: "Garden Groove harbour",
        value: "730000"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000"
    },
    {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};
 $scope.form = {};

 $scope.dspm_main = function(input){

mainService.dspmMain($scope.form).success(function($data){
  $scope.Data = angular.extend($data);
console.log($scope.Data);


})

 }



 




});

 app.controller("dspmPcuCtrl", function($scope,mainService,$routeParams,$http) {
var data = $routeParams ;
console.log(data)

/*$http({
    url: user.details_path, 
    method: "GET",
    params: {user_id: user.id}
 });
*/
$scope.dspm_pcu = function(data){

mainService.dspmPcu(data).success(function($data){
  $scope.DataPcu = angular.extend($data);
console.log($scope.DataPcu);

})

 }

 $scope.dspm_pcu(data);






 
 });


