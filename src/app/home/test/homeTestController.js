(function() {
  function HomeTestController(
  	$scope
  ){
	function init(){
		console.log('init test')
		$scope.test = 'home Test';
	}

	init();
  }

  angular.module('app').controller('homeTestController', ['$scope', HomeTestController]);

})();
