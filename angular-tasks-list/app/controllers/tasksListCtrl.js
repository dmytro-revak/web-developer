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
       if (newTask) {
           $scope.tasksList.push(newTask);
       }
   };
});
