var app = angular.module('DockerApp');

app.controller('UserController', function (User, Auth, $state, $scope, $rootScope) {
  
  $rootScope.user = {};

  var init = function () {
    User.getUserData()
      .then(function (data) {
        $rootScope.user.name = data.username;
        $rootScope.user.email = data.email;
        $rootScope.user.id = data.user_id;
      });
  }

  $scope.isAuthenticated = function () {
    return Auth.isAuthenticated ? Auth.isAuthenticated() : false;
  };

  $scope.logout = function () {
    Auth.clear();
    $state.go('login');
  };
  
  init();
});