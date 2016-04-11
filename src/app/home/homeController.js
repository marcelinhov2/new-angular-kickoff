(function() {
  function HomeController(
  	$scope
  ){
	function init(){
		$scope.test = 'home';
	}

	init();
  }

  angular.module('app').controller('homeController', ['$scope', HomeController]);

})();
