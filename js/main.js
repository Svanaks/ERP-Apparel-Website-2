/**
 * Main AngularJS Web Application
 */
var app = angular.module('ApparelApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    // Pages
    .when("/house", {templateUrl: "partials/house.html", controller: "HouseCtrl"})
    .when("/articles", {templateUrl: "partials/articles.html", controller: "ArticleCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/contact/success", {templateUrl: "partials/contact_success.html", controller: "PageCtrl"})


    //PROJECTS 
    .when('/projectDetail/:link', {
        templateUrl: function(params) {
            if (params.link != "") {
                return 'partials/'+params.link+'.html';
            }

            return 'partials/404.html';   
        },
       controller: 'ProjectDetailCtrl'
    })
    // else 404
    .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})
    .otherwise({redirectTo: '/404'});

}]);

app.controller("ArticleCtrl", function($scope, $http) {
      var store = this;
      store.articles = [];

      $http({
        method: 'GET',
        url: 'http://localhost/ERP-Apparel-Back/web/app_dev.php/articles/website/4'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available

        store.articles = response.data;
        console.log(response);
        console.log(store.articles);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
});


app.controller('HouseCtrl', function ($scope) {
    $scope.load = function() {
        $(document).ready(function(){
            $('.parallax').parallax();
        });
    };

   //don't forget to call the load function
   $scope.load();
});
/**
 * Controls Home Page.
 */
app.controller('HomeCtrl', function (/* $scope, $location, $http */) {
    
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log('Page Generale');
});




