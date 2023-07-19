(function (angular) {
  angular.module("Demo")
    .service("serviceReview", ["$http", function ($http) {
      this.getUser = async () => {
        const response = await $http({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users"
        });
        return response.data;
      };
    }])
})(window.angular);
