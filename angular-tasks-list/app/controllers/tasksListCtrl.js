tasksListApp.controller('tasksListCtrl', function ($scope) {

    $scope.tasksList = [
       'Винести сміття',
       'Поприбирати',
       'Написати домашнє',
       'Підлити квіти',
       'Вивчити Angular',
       'Не забути про пари',
       'Знайти сенс життя'
   ];

   $scope.addNewTask = function (newTask) {
       $scope.tasksList.push(newTask);
       alert(1);
   };
});
