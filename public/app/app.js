

// Sevilla-R-live
angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'ui.bootstrap.datetimepicker',
                         'textAngular', 'pascalprecht.translate', 'translateApp', 'geolocation', 
                         'ngMap', 'angular-loading-bar', 'as.sortable'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', 					{ templateUrl: 'views/main.html',  controller: 'MainController' })
			.when('/login',				{ templateUrl: 'views/login.html',  controller: 'LoginController' })
			.when('/logout',			{ templateUrl: 'views/logout.html', controller: 'LogoutController' })
			.when('/import/:class',		{ templateUrl: 'views/import.html', controller: 'ImportController' })


			.when('/olympicMedal/',			 { templateUrl: 'views/olympicMedal/list.html',   controller: 'ListOlympicMedalController' })
			.when('/olympicMedal/select',	 { templateUrl: 'views/olympicMedal/select.html', controller: 'SelectOlympicMedalController' })
			.when('/olympicMedal/add',        { templateUrl: 'views/olympicMedal/edit.html',   controller: 'EditOlympicMedalController' })
			.when('/olympicMedal/edit/:id', 	 { templateUrl: 'views/olympicMedal/edit.html',   controller: 'EditOlympicMedalController' })
			.when('/olympicMedal/delete/:id', { templateUrl: 'views/olympicMedal/edit.html', 	 controller: 'EditOlympicMedalController' })
			.when('/olympicMedal/view/:id', 	 { templateUrl: 'views/olympicMedal/edit.html', 	 controller: 'EditOlympicMedalController' })

			.when('/oficina/',			 { templateUrl: 'views/oficina/list.html',   controller: 'ListOficinaController' })
			.when('/oficina/select',	 { templateUrl: 'views/oficina/select.html', controller: 'SelectOficinaController' })
			.when('/oficina/add',        { templateUrl: 'views/oficina/edit.html',   controller: 'EditOficinaController' })
			.when('/oficina/edit/:id', 	 { templateUrl: 'views/oficina/edit.html',   controller: 'EditOficinaController' })
			.when('/oficina/delete/:id', { templateUrl: 'views/oficina/edit.html', 	 controller: 'EditOficinaController' })
			.when('/oficina/view/:id', 	 { templateUrl: 'views/oficina/edit.html', 	 controller: 'EditOficinaController' })

			.when('/weather/',			 { templateUrl: 'views/weather/list.html',   controller: 'ListWeatherController' })
			.when('/weather/select',	 { templateUrl: 'views/weather/select.html', controller: 'SelectWeatherController' })
			.when('/weather/add',        { templateUrl: 'views/weather/edit.html',   controller: 'EditWeatherController' })
			.when('/weather/edit/:id', 	 { templateUrl: 'views/weather/edit.html',   controller: 'EditWeatherController' })
			.when('/weather/delete/:id', { templateUrl: 'views/weather/edit.html', 	 controller: 'EditWeatherController' })
			.when('/weather/view/:id', 	 { templateUrl: 'views/weather/edit.html', 	 controller: 'EditWeatherController' })

			.when('/exoplanet/',			 { templateUrl: 'views/exoplanet/list.html',   controller: 'ListExoplanetController' })
			.when('/exoplanet/select',	 { templateUrl: 'views/exoplanet/select.html', controller: 'SelectExoplanetController' })
			.when('/exoplanet/add',        { templateUrl: 'views/exoplanet/edit.html',   controller: 'EditExoplanetController' })
			.when('/exoplanet/edit/:id', 	 { templateUrl: 'views/exoplanet/edit.html',   controller: 'EditExoplanetController' })
			.when('/exoplanet/delete/:id', { templateUrl: 'views/exoplanet/edit.html', 	 controller: 'EditExoplanetController' })
			.when('/exoplanet/view/:id', 	 { templateUrl: 'views/exoplanet/edit.html', 	 controller: 'EditExoplanetController' })


			.when('/admin/webHooks/', { templateUrl: 'views/admin/webHooks.html', controller: 'AdminWebHooksController' })
			.when('/admin/users/',  { templateUrl: 'views/admin/users.html', controller: 'AdminUsersController' })
			.when('/admin/permissions/',  { templateUrl: 'views/admin/permissions.html', controller: 'AdminPermissionsController' })

			.when('/403',  		 	 { templateUrl: 'views/403.html' })

			.otherwise({ redirectTo: '/login' });
	}])

	.constant('AUTH_EVENTS', {
		loginSuccess: 'auth-login-success',
		loginFailed: 'auth-login-failed',
		logoutSuccess: 'auth-logout-success',
		sessionTimeout: 'auth-session-timeout',
		notAuthenticated: 'auth-not-authenticated',
		notAuthorized: 'auth-not-authorized'
	})

	.constant('USER_ROLES', {
		admin: 'admin'
	})

	//using:  https://github.com/Gillardo/bootstrap-ui-datetime-picker
	.constant('uiDatetimePickerConfig', {
		dateFormat: 'yyyy-MM-dd HH:mm',
		enableDate: true,
		enableTime: true,
		todayText: 'Today',
		nowText: 'Now',
		clearText: 'Clear',
		closeText: 'Done',
		dateText: 'Date',
		timeText: 'Time',
		closeOnDateSelection: true,
		appendToBody: false,
		showButtonBar: true
	})	

	.run(['$rootScope', '$location', 'Session', function($rootScope, $location, Session) {
		// register listener to watch route changes
		$rootScope.$on( "$routeChangeStart", function(event, next, current) {
			if ( $rootScope.isLogged !== true  ) {
				if ( next.templateUrl == "views/login.html" ) {
				  // already going to #login, no redirect needed
				} else {
					// not going to #login, we should redirect now (and store current route for later redirect)
					$rootScope.requestedRoute = $location.path();
					$location.path( "/login" );
				}
			}
			else {
				//logged. Check Role Authorization
				if ( next.templateUrl && (next.templateUrl.substr(0, 12) === "views/admin/") ) {
					if (!Session.userHasRole("Admin")) {
						$location.path( "/403" );
					}
				}
			}		  			
		});
	}])
;

angular.module('myApp').value('baseUrl', 			'');
angular.module('myApp').value('baseApi', 			'/api');

