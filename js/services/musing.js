/* global angular */

angular.module('musingsApp')
.factory('Musing', [
  '$resource',
  musingsService
])

function musingsService ($resource) {
  return $resource('http://localhost:3000/musings/:id', {}, {
    update: {
      method: 'PUT',
      method: 'ALL',
      method: 'Create',
      method: 'REMOVE'
    }
  })
}
