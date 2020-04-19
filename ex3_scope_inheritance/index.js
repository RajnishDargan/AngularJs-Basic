var AuthorApp = angular.module('AuthorApp',[]);
AuthorApp.controller('MyController',function($scope){
    $scope.authors = [
        {'name' : 'rahul'},
        {'name' : 'shubham'},
        {'name' : 'rajat'}
    ];
});