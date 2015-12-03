angular.module('myApp').service('OficinaService', ['$http', '$q', 'baseApi', 'QueryBuilderService', 'EntityUtilService', function ($http, $q, baseApi, QueryBuilderService, EntityUtilService) {

	var OficinaService = {};

	var resourceUrl = baseApi + '/oficinas';
	var fields = null;

	function buildFields() {
		if (!fields) {
			fields = [
				{name: 'nombre', type: 'string'},
				{name: 'localizacion', type: 'geopoint'},
				{name: 'telefono', type: 'string'},
				{name: 'imagen', type: 'image'}
			];
		}
		return fields;
	}

	function getDisplayLabel(oficina) {
		return oficina.nombre;
	}
	OficinaService.getDisplayLabel = getDisplayLabel;

	//-- Public API -----

	OficinaService.getCount =  function (opts) {
		opts = opts || {};
		opts.fields = opts.fields || buildFields();
		opts.count = true;		
		return QueryBuilderService.buildBaucisQuery(opts).then(function(q) {
			return $http.get(resourceUrl + q);
		}, function (err) {
			return $q.reject(err);
		});
	};
	
	OficinaService.getList = function (opts) {
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

	OficinaService.getListAsCsv = function (opts) {
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

	OficinaService.getFileAsCsv = function (opts) {
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
	OficinaService.getFileAsXml = function (opts) {
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
	OficinaService.getFileAsXlsx = function (opts) {
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
	
	OficinaService.get = function (link) {
		return $http.get(link);
	};
	
	OficinaService.getDocument = function (id) {
		return OficinaService.get(resourceUrl + '/' + id ).then(function(response) {
			response.data._displayLabel = getDisplayLabel(response.data);
			return response;
		}, function (err) {
			return $q.reject(err);
		});
	};

	OficinaService.add = function (item) {
		//Multipart/form-data to support files attached
		var multipartMessage = EntityUtilService.buildMultipartMessage('data', item);
		return $http.post(resourceUrl, multipartMessage, {
			headers: { 'Content-Type': undefined },
			transformRequest: angular.identity
		});
	};

	OficinaService.update = function (item) {
		//Multipart/form-data to support files attached
		var q = resourceUrl + '/' + item._id;
		var multipartMessage = EntityUtilService.buildMultipartMessage('data', item);
		return $http.put(q, multipartMessage, {
			headers: { 'Content-Type': undefined },
			transformRequest: angular.identity
		});		
	};

	OficinaService.delete = function (id) {
		return $http.delete(resourceUrl + '/' + id);
	};

	OficinaService.deleteMany = function (ids) {
		return $http.post(resourceUrl + '/deleteByIds', JSON.stringify(ids));
	};	

	OficinaService.deleteByQuery = function (opts) {
		opts = opts || {};
		opts.fields = opts.fields || buildFields();
		opts.paginate = false;		
		return QueryBuilderService.buildBaucisQuery(opts).then(function (q) {
			return $http.delete(resourceUrl + q);
		}, function (err) {
			return $q.reject(err);
		});
	};

	return OficinaService;

}]);
