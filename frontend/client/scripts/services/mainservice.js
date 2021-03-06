(function(){
	angular.module('sportsticket').factory("MainService",MainService);
	MainService.$inject=['$http'];
	function MainService($http){
		var service={};
		service.verifydata=verifydata;
		service.loginsubmit=loginsubmit;
		service.logoutuser=logoutuser;
		service.bookticket=bookticket;
		return service;

		function logoutuser(data){
			return $http.post('http://localhost:3000/logout',data).then(successfunction,failurefunction);
		}
		function verifydata(data){
			return $http.post('http://localhost:3000/register',data).then(successfunction,failurefunction);
		}
        function bookticket(data){
            return $http.post('http://localhost:3000/booking',data).then(successfunction,failurefunction);
        }

        function loginsubmit(data){
			return $http.post('http://localhost:3000/login',data).then(successfunction,failurefunction);		
		}
		/*function currentuser(){
			return $http.get('http://localhost:3000/usercheck').then(successfunc,failurefunction);
		}
		*/function successfunction(data){
			console.log("HANDLED SUCCESSFULLY");
			return data;
		}
		function failurefunction(err){
			console.log("Error in post function");
			console.log(err);
			return err;
		}/*
		function successfunc(data)
		{
				return data; 
		}*/
	}
})();