tasksListApp.controller('tasksListCtrl', function ($scope) {

    // initial tasks list
    $scope.tasksList = [
       'Винести сміття',
       'Поприбирати',
       'Написати домашнє',
       'Підлити квіти',
       'Вивчити Angular',
       'Не забути про пари',
       'Знайти сенс життя'
   ];

    // add new task when user click the add button
   $scope.addNewTask = function (newTask) {
       debugger
       if (newTask && $scope.tasksList.indexOf(newTask) === -1) {
           $scope.tasksList.push(newTask);
       }
   };

   // remove certain task when user click the delete button
   $scope.removeTask = function (index) {
       $scope.tasksList.splice(index, 1);
   }

});
