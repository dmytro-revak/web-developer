blogApp.controller('blogCtrl', function ($http) {

    // save the $scope as vm
    var vm = this;

    // get initial posts list from posts.json
    $http.get("./posts.json").then(function(response) {
        vm.postList = response.data;
    });

    // add new blog post when user click add button
    vm.addNewPost = function () {
        if (vm.newPostTopic && vm.newPostMessage) {
            var newPost = {};
            newPost.postHeading = vm.newPostTopic;
            newPost.author = vm.userStatus;
            newPost.date = vm.getCurrentDate();
            newPost.message = vm.newPostMessage;
            vm.postList.push(newPost);
        }
    };

    // remove certain post when user click remove button
    vm.removePost =  function (post) {
        var postIndex = vm.postList.indexOf(post);
        vm.postList.splice(postIndex, 1);
    };

    // function which generated current date for the new post on blog
    vm.getCurrentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if(dd < 10) {
            dd = '0' + dd;
        }

        if(mm < 10) {
            mm = '0' + mm;
        }

        return mm + '/' + dd + '/' +yyyy;
    };



    vm.userStatus = 'Admin';

});