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

 this.getPersonChk = function(data){
var formData = data ;
console.log(formData)
var promise = $http({
    method : 'POST',
    url: './api/getPersonChk.php',
    
    data : formData

})
return promise ;
}


 this.dspmMain = function(data){
var formData = data ;
console.log(formData)
var promise = $http({
    method : 'POST',
    url: './api/getdspmmain.php',
    data : formData

})
return promise ;
}

this.dspmPcu = function(data){
var formData = data ;
console.log(formData)
var promise = $http({
    method : 'POST',
    url: './api/getDspmPcu.php',
    data : formData

})
return promise ;
}

});






