'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/room', {
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/room'
      });
  });

angular.module('publicApp')
  .constant('config', {
      // Change it for your app URL
      SIGNALIG_SERVER_URL: YOUR_APP_URL
  });
