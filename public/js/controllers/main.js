angular.module('resortController', [])

	.controller('mainController', ['$scope','$http','Resorts', function($scope, $http, Resorts) {
		$scope.formData = {};
		$scope.loading = true; //Prevejo um loading, mas não implementei.

		// GET =====================================================================
		Resorts.get()
			.success(function(data) {
				$scope.resorts = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		$scope.createResort = function() {

			if ($scope.formData.nome != undefined) {
				$scope.loading = true;

				Resorts.create($scope.formData)
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.resorts = data;
					});
			}
		};

		// DELETE ==================================================================
		$scope.deleteResort = function(id) {
			$scope.loading = true;

			Resorts.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.resorts = data;
				});
		};
	}]);