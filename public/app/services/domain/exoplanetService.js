angular.module('myApp').service('ExoplanetService', ['$http', '$q', 'baseApi', 'QueryBuilderService', 'EntityUtilService', function ($http, $q, baseApi, QueryBuilderService, EntityUtilService) {

	var ExoplanetService = {};

	var resourceUrl = baseApi + '/exoplanets';
	var fields = null;

	function buildFields() {
		if (!fields) {
			fields = [
				{name: 'name', type: 'string'},
				{name: 'msini', type: 'decimal'},
				{name: 'semiMajorAxis', type: 'decimal'},
				{name: 'orbitalPeriod', type: 'decimal'},
				{name: 'orbitalExcentricity', type: 'decimal'},
				{name: 'om', type: 'int'},
				{name: 'velocity', type: 'decimal'},
				{name: 'orbitRef', type: 'string'},
				{name: 'firstRef', type: 'string'}
			];
		}
		return fields;
	}

	function getDisplayLabel(exoplanet) {
		return exoplanet.name;
	}
	ExoplanetService.getDisplayLabel = getDisplayLabel;

	//-- Public API -----

	ExoplanetService.getCount =  function (opts) {
		opts = opts || {};
		opts.fields = opts.fields || buildFields();
		opts.count = true;		
		return QueryBuilderService.buildBaucisQuery(opts).then(function(q) {
			return $http.get(resourceUrl + q);
		}, function (err) {
			return $q.reject(err);
		});
	};
	
	ExoplanetService.getList = function (opts) {
		opts = opts || {};
		opts.fields = opts.fields || buildFields();
		return QueryBuilderService.buildBaucisQuery(opts).then(function(q) {
			return $http.get(resourceUrl + q).then(function(response) {
				response.data.forEach(function(element) {
					element._displayLabel = getDisplayLabel(element);
				});
				return response;
			}, function (err) {
				return $q.reject(err);
			});
		}, function (err) {
			return $q.reject(err);
		});
	};

	function exportQuery(opts) {
		opts = opts || {};
		opts.paginate = false;
		opts.fields = opts.fields || buildFields();
		return QueryBuilderService.buildBaucisQuery(opts).then(function (q) {
		    return q;
		}, function (err) {
		    return $q.reject(err);
		});
	}

	ExoplanetService.getListAsCsv = function (opts) {
		return exportQuery(opts).then(function (q) {
			return $http({
				method: 'GET', 
				url: resourceUrl + q, 
				headers: {'Accept': 'text/csv'} 
			});
		}, function (err) {
			return $q.reject(err);
		});
	};	

	ExoplanetService.getFileAsCsv = function (opts) {
		return exportQuery(opts).then(function (q) {
			return $http({
				method: 'GET', 
				url: resourceUrl + q, 
				headers: {'Accept': 'text/csv'} 
			});
		}, function (err) {
			return $q.reject(err);
		});
	};	
	ExoplanetService.getFileAsXml = function (opts) {
		return exportQuery(opts).then(function (q) {
			return $http({
				method: 'GET', 
				url: resourceUrl + q, 
				headers: {'Accept': 'text/xml'} 
			});
		}, function (err) {
			return $q.reject(err);
		});
	};		
	ExoplanetService.getFileAsXlsx = function (opts) {
		return exportQuery(opts).then(function (q) {
			return $http({
				method: 'GET', 
				url: resourceUrl + q, 
				headers: {'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'},
				responseType: 'blob' 
			});
		}, function (err) {
			return $q.reject(err);
		});
	};		
	
	ExoplanetService.get = function (link) {
		return $http.get(link);
	};
	
	ExoplanetService.getDocument = function (id) {
		return ExoplanetService.get(resourceUrl + '/' + id ).then(function(response) {
			response.data._displayLabel = getDisplayLabel(response.data);
			return response;
		}, function (err) {
			return $q.reject(err);
		});
	};

	ExoplanetService.add = function (item) {
		return $http.post(resourceUrl, JSON.stringify(item));
	};

	ExoplanetService.update = function (item) {
		return $http.put(resourceUrl + '/' + item._id, JSON.stringify(item));
	};

	ExoplanetService.delete = function (id) {
		return $http.delete(resourceUrl + '/' + id);
	};

	ExoplanetService.deleteMany = function (ids) {
		return $http.post(resourceUrl + '/deleteByIds', JSON.stringify(ids));
	};	

	ExoplanetService.deleteByQuery = function (opts) {
		opts = opts || {};
		opts.fields = opts.fields || buildFields();
		opts.paginate = false;		
		return QueryBuilderService.buildBaucisQuery(opts).then(function (q) {
			return $http.delete(resourceUrl + q);
		}, function (err) {
			return $q.reject(err);
		});
	};

	return ExoplanetService;

}]);
