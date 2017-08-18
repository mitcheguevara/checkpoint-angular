/* global angular */

angular.module('grumblr')
.controller('MusingShowController', [
  '$stateParams',
  'Musing',
  MusingShowController
])

function MusingShowController($stateParams, Musing) {
  this.musing = Musing.get({id: $stateParams.id})
}
