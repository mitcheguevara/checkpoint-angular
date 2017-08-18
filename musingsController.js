musingsController

angular.module("musingsController")
.controller("musingsController", [
"musingFactory",
musingControllerFunction
])
function musingControllerFunction (musingFactory){
  this.musings = musingFactory.all
}
