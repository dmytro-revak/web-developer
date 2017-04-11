tasksListApp.controller('tasksListCtrl', function ($scope) {

    // initial tasks list
    $scope.tasksList = [
        {
            taskName: 'Винести сміття',
            isDone: false
        },
        {
            taskName: 'Поприбирати',
            isDone: false
        },
        {
            taskName: 'Написати домашнє',
            isDone: false
        },
        {
            taskName: 'Підлити квіти',
            isDone: false
        },
        {
            taskName: 'Вивчити Angular',
            isDone: false
        },
        {
            taskName: 'Не забути про пари',
            isDone: false
        },
        {
            taskName: 'Знайти сенс життя',
            isDone: false
        }
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
