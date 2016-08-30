app.factory('AuthFactory',function($http, $log){


	this.login = function(user){
		console.log(user);
		return $http.post('/api/auth/login', user)
		.then(function(x){
			console.log('x',x,'xcon',x.config.data);
		});
	};


	return this;
});