const myApp=angular.module('myApp',[ngRoute]);

myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/home',{
        templateUrl: 'views/home.html',
    })
    .when('/directory',{
        templateUrl: 'views/directory.html',
        controller: 'mycontroller'
    }).otherwise({
        redirectTo:'/home'
    })

}])


//controller
myApp.controller("mycontroller",['$scope',function($scope){

    $scope.addNinja=()=>
    {
        $scope.ninja.push({
            name : $scope.newNinja.name,
            belt : $scope.newNinja.belt,
            rate : parseInt($scope.newNinja.rate),
            available : true
        })
        $scope.newNinja.name="";
        $scope.newNinja.belt="";
        $scope.newNinja.rate="";

    }

    $scope.removeNinja=(item)=>{
        const removedItem=$scope.ninja.indexOf(item);
        $scope.ninja.splice(removedItem,1);
    }

    $scope.ninja=[
        {
            name:'naruto',
            belt:'orange',
            rate:50,
            available:true
        },
        {
            name:"sasuke",
            belt:'purple',
            rate:40,
            available:true
        },
        {
            name:'itachi',
            belt:'purple',
            rate:31,
            available:false
        },
        {
            name:'shisui',
            belt:'green',
            rate:35,
            available:true
        }
    ]

}])