/* global angular */

angular
.module('musing')
.config([
  '$stateProvider',
  RouterFunction
])

function RouterFunction ($stateProvider) {
  $stateProvider
  .state('musingIndex', {
    url: '/musings',
    templateUrl: 'js/musings/index.html',
    controller: 'MusingIndexController',
    controllerAs: 'vm'
  })
  .state('musingNew', {
    url: '/musings/new',
    templateUrl: 'js/musings/new.html',
    controller: 'MusingNewController',
    controllerAs: 'vm'
  })
  .state('musingShow', {
    url: '/musings/:id',
    templateUrl: 'js/musings/show.html',
    controller: 'MusingShowController',
    controllerAs: 'vm'
  })
  .state('musingEdit', {
    url: '/musings/:id/edit',
    templateUrl: 'js/musings/edit.html',
    controller: 'MusingEditController',
    controllerAs: 'vm'
  })
}
