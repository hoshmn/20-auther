app.factory('AuthFactory',function($http, $log, $state){


	this.login = function(user){
		return $http.post('/api/auth/login', user)
		.then(function(loggedInUser){
			console.log(loggedInUser.data.id);
			$state.go('user', {id:loggedInUser.data.id});
		}).catch(function(error){
			alert('Yo WTF');
		});
	};


	this.signup = function(user){
		console.log(user);
		return $http.post('/api/auth/signup', user)
		.then(function(newUser){
			console.log(newUser.data.id);
			$state.go('user', {id:newUser.data.id});
		}).catch(function(error){
			alert('Yo who you thank you izzz, dat email already usen');
		});
	};


	return this;
});