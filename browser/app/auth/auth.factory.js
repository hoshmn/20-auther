app.factory('AuthFactory',function($http, $log, $state){

	var currentUser;

	this.login = function(user){

		if(currentUser){
			alert("Already logged in.")
		} else {
			return $http.post('/api/auth/login', user)
			.then(function(loggedInUser){
				console.log(loggedInUser.data.id);
				currentUser = loggedInUser.data.id
				console.log("\n currentUser: \n" + currentUser)
				$state.go('user', {id:loggedInUser.data.id});

			}).catch(function(error){
				alert('Yo WTF');
			});
		}
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

	this.logout = function(user){
		return $http.put('api/auth/logout', currentUser)
		.then(function(byebye){
			console.log(byebye.data);
			currentUser = null;
			$state.go('home')
		}).catch(function(error){
			alert('Yo who you thank you izzz??? show uz rezpectzz')
		})
	}

	return this;
});