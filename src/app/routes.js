(function() {
  function Routes($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $httpProvider, $locationProvider) {
    $stateProvider
      .state('App', {
        abstract: true,
        template: '<div ui-view="main"></div>',
        controller: 'appController'
      })
      .state({
        name: 'App.home',
        abstract: true,
        views: {
          'main@App': {
            templateUrl: '/app/home/homeTemplate.html',
            controller: 'homeController'
          }
        }
      })
      .state({
        name: 'App.home.index',
        url: '/home',
        views: {
          'home@App.home': {
            templateUrl: '/app/home/index/homeIndexTemplate.html',
            controller: 'homeIndexController'
          }
        }
      })
      .state({
        name: 'App.home.test',
        url: '/test',
        views: {
          'home@App.home': {
            templateUrl: '/app/home/test/homeTestTemplate.html',
            controller: 'homeTestController'
          }
        }
      })

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
  }

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$httpProvider', '$locationProvider', Routes]);

})();