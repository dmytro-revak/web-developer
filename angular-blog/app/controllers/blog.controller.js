blogApp.controller('blogCtrl', function ($http) {

    // save the $scope as vm
    var vm = this;

    // get initial posts list from posts.json
    $http.get("./posts.json").then(function(response) {
        vm.postList = response.data;
    });

    // debugger

    // setTimeout(function () {
    //     console.log(vm.postList);
    //
    // }, 2000);


    vm.userStatus = 'Admin';

});