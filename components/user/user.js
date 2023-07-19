(function (angular) {
  "use strict";
  angular.module("Demo")
    .component("user", {
      templateUrl: "components/user/user.html",
      controller: userController
    })

})(window.angular);
