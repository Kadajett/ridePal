'use strict';

angular.module('ridepalApp')
  .controller('EditorCtrl', function ($scope, Route) {
   	$scope.longInput = 0;
   	$scope.latInput = 0;
   	$scope.routes = [];
   	$scope.singleRoute = [];
   	$scope.point = {};
   	$scope.arrivalTime = 0;
   	$scope.description = '';
   	$scope.hstep = 1;
   	$scope.mstep = 15;
    $scope.routeDescription = ''
    // Setup for the arrival timer;
	$scope.options = {
	    hstep: [1, 2, 3],
	    mstep: [1, 5, 10, 15, 25, 30]
	  };

  // reset the point configuration to the beginning
  $scope.resetPoint = function(){
  	$scope.longInput = 0;
   	$scope.latInput = 0;
   	$scope.point = {};
   	$scope.arrivalTime = 0;
   	$scope.description = '';
  }

  // add a point to the route to be added to the server route list
  // must have at least one route to be sent to the server
   $scope.addPoint = function(){
   	if($scope.latInput > 0 && $scope.longInput > 0 && $scope.description.length > 0){
	   	$scope.point.latitude = $scope.latInput;
	   	$scope.point.longitude = $scope.longInput;
	   	$scope.point.arrival = $scope.arrivalTime
	   	$scope.point.description = $scope.description;

	   	$scope.singleRoute.push($scope.copyObject($scope.point))

	   	$scope.resetPoint();
   	}

   }

   // delete all data on the route before it is sent to the server
   $scope.cancelRoute = function(){
   	$scope.singleRoute = [];
   }

   // save route to server with all the point data.
   $scope.saveRoute = function(){
   	if($scope.singleRoute.length > 0){
   		$scope.singleRoute.description = $scope.routeDescription;
   		$scope.routes.push($scope.copyObject($scope.singleRoute))
	   	$scope.singleRoute = [];
	   	Route.routeList = $scope.routes;
	   	$scope.routeDescription = ''
   	}
   	

   }

   // A cheap way to copy an item without the reference. With more time, this would have been a global function.
   $scope.copyObject = function(obj){
   	if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
   }

  });
