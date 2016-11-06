app.service('mainService', function ($http) {


    this.OpdService = function(data){
var formData = data ;
console.log(formData)
var promise = $http({
    method : 'POST',
    url: './api/getService.php',
    data : formData

})
return promise ;
}

 this.getPerson = function(){
//var formData = data ;
console.log(formData)
var promise = $http({
    method : 'GET',
    url: './api/getPerson.php',
    data : formData

})
return promise ;
}




});






