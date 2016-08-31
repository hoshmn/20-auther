app.factory('AuthFactory',function($http, $log, $state){


	this.login = function(user){
		return $http.post('/api/auth/login', user)
		.then(function(x){
			// console.log(x);
			$state.go('home')
		}).catch(function(error){
			alert('Yo WTF')
		})
	};


	return this;
});