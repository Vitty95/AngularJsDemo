(function (angular) {
  "use strict";
  angular.module("Demo", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/user", {
          template: "<user></user>"
        })
        .otherwise({
          redirectTo: "/user"
        })
    });
})(window.angular);
