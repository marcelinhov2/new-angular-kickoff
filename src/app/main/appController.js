(function() {
  function AppController(
  	$scope
  ){
	function init(){
		$scope.test = 'teste';
	}

	init();
  }

  angular.module('app').controller('appController', ['$scope', AppController]);

})();
