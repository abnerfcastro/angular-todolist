/*
 * Author: Abner Castro
 * Date: August 13th, 2016
 * Description:
 *      Based on tutorial by David East. Available at http://medialoot.com/blog/angularjs-for-absolute-beginners/.
 *      Creates a module that that will hold a controller called TodoCtrl.
 */

(function () {

    var app = angular.module("todoApp", []);

    app.controller("TodoCtrl", function($scope) {
        $scope.newTodo = '';
        
        $scope.todos = [
            'Make some coffee',
            'Code all night'
        ];

        $scope.done = function(todo) {
            var indexOf = $scope.todos.indexOf(todo);
            if (indexOf !== -1) {
                $scope.todos.splice(indexOf, 1);
            }
        };

        $scope.add = function(e) {
            if (e.which && e.which === 13 && $scope.newTodo !== '') {
                $scope.todos.push($scope.newTodo);
                $scope.newTodo = '';
            }
        }
    });

})();