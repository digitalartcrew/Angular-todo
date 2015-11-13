// var app = angular.module('todoApp',[]); // What's missing? Hint, it's more than one thing.

// app.controller("TodosController", function($scope) { // What's missing?
// 	$scope.todos = [{todoName:'name', done: false}]; // Store todo items here. What is the data type?
// 	function addTodo() { 
// 		$scope.todos.push({todoText: $scope.todoInput, done:false});
// 		$scope.todoInput = '';
// 	}

// 	function deleteAll() { 
// 		var oldList = $scope.todos;
// 		$scope.todos = [];
// 		angular.forEach(oldList, function(x){
// 			if (!x.done)
// 				$scope.todos.push(x);
// 		});
// 	}
// });

var app = angular.module('myApp', []); 
app.controller('TodosController', function($scope) {
    $scope.todoList = [{todoText:'Clean House', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});