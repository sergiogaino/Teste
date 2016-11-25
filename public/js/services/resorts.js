angular.module('resortService', [])

	// serviço
	// essa função retorna as promises object 
	.factory('Resorts', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/resorts');
			},
			create : function(resortData) {
				return $http.post('/api/resorts', resortData);
			},
			delete : function(id) {
				return $http.delete('/api/resorts/' + id);
			}
		}
	}]);