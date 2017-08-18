/* global angular */

angular.module('grumblr')
.controller('MusingNewController', [
  '$state',
  'Musing',
  MusingNewController
])

function MusingNewController ($state, Musing) {
  this.musing = new Musing()
  this.create = function () {
    this.musing.$save(() => {
      $state.go('musingIndex')
    })
  }
}
