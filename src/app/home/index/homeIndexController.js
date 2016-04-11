(function() {
  function HomeIndexController(
  	$scope
  ){
	function init(){
		$scope.test = 'home index';
	}

	init();
  }

  angular.module('app').controller('homeIndexController', ['$scope', HomeIndexController]);

})();
