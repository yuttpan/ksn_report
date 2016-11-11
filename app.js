

var app = angular.module('ksn', ['ngRoute','ui.bootstrap','googlechart','ng-fusioncharts']);




app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/main/main.html",
         controller : "MainCtrl"
    })
    .when("/opd", {
        templateUrl : "pages/opd/opd.html",
        controller : "OpdCtrl"

    })

    .when("/pp", {
        templateUrl : "pages/pp/pp.html",
        controller : "ppCtrl"

    })

     .when("/person", {
        templateUrl : "pages/person/person.html",
        controller : "personCtrl"

    })

    .when("/person_check", {
        templateUrl : "pages/person/person_check.html",
        controller : "personCheckCtrl"

    })
   
});