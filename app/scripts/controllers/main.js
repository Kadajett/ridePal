'use strict';

angular.module('ridepalApp')
  .controller('MainCtrl', function ($rootScope, $scope, Route) {
    

    // Set up stuff for the google map.
	google.maps.visualRefresh = true;
	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 8
	};

	// This was a quick fix for displaying the routes on the map and main page
	$scope.route = Route;
		

	
  });
