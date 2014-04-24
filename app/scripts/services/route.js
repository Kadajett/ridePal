'use strict';

angular.module('ridepalApp')
  .service('Route', function Route() {
    var routeService = this;

    // This needs to be sent up to a localfile. Even though I don't have time 
    // to make a server, and client to local machine is impossible. Damnit
    routeService.routeList = [];

    // This should actually send a delete command to a server to delete the route
    routeService.deleteRoute = function(route){
    	routeService.routeList.splice(route, 1);
    }	


    return routeService;
  });
