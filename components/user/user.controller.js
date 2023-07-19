const userController = function ($scope, serviceReview) {
  this.userArray = [];

  this.getAllProducts = async () => {
    this.userArray = await serviceReview.getUser();
    $scope.$apply();
  };

  this.$onInit = () => {
    this.getAllProducts();
  };

  this.onDetails = (id) => {
  //TODO
  };

};
