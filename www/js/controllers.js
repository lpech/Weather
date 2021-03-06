angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http, Unidades, Ciudad, Numero) {
	$http.get("http://api.openweathermap.org/data/2.5/forecast?lang=es&q="+ Ciudad.get() +"&units=" + Unidades.get() + "&cnt=" + Numero.get()).success( function(data){
		console.log(data);
		$scope.chats = data.list;
	});

	$scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast?lang=es&q="+ Ciudad.get() +"&units=" + Unidades.get() + "&cnt=" + Numero.get()).success( function(data){
		console.log(data);
		$scope.chats = data.list;
	})
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, Ciudad) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ClimaCtrl', function($scope, $http, Unidades, Ciudad) {
	$http.get("http://api.openweathermap.org/data/2.5/weather?lang=es&q="+ Ciudad.get() +"&units=" + Unidades.get()).success( function(data){
		console.log(data);
		$scope.ciudad = data.name;
		$scope.temparatura = data.main.temp;
		$scope.tempmin = data.main.temp_min;
		$scope.tempmax = data.main.temp_max;
	});

	$scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/weather?lang=es&q="+ Ciudad.get() +"&units=" + Unidades.get()).success( function(data){
		console.log(data);
		$scope.ciudad = data.name;
		$scope.humedad = data.main.humidity;
		$scope.tempmin = data.main.temp_min;
		$scope.tempmax = data.main.temp_max;
	})
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})

.controller('DiasCtrl', function($scope, $http, Unidades, Ciudad, Numero) {
	$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lang=es&q="+ Ciudad.get() +"&units=" + Unidades.get()).success( function(data){
		console.log(data);
		$scope.chats = data.list;
	});

	$scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lang=es&q="+ Ciudad.get() +"&units=" + Unidades.get() + "&cnt=" + Numero.get()).success( function(data){
		console.log(data);
		$scope.chats = data.list;
	})
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})

.controller('AccountCtrl', function($scope, Unidades, Ciudad, Numero) {
	$scope.unidades = function(unidad){
		Unidades.set(unidad);
	}

	$scope.ciudad = function(ciudad){
		console.log(ciudad);
		Ciudad.set(ciudad);
	}

	$scope.numero=function(numero){
		console.log(numero);
		Numero.set(numero);
	}
});
