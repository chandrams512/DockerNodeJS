var app = angular.module('DockerApp');

// Storage key prefix
app.config(['$localStorageProvider', function($localStorageProvider) {
  $localStorageProvider.setKeyPrefix('docker-registration-')
}]);

// API auth interceptor
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('ApiInterceptor');
});