(function(){
'use strict';
var states = [
    {
        name: 'Landing_page',
             state:
                 {
                     url:'/',
                     templateUrl: '../views/homepage.html',
                     data: {
                         text: "HOME",
                         visible: false
                     }
                 }
    },
    {
        name: 'Courses',
             state:
                 {
                     url:'/courses',
                     templateUrl: '../views/matches.html',
                     data: {
                         text: "COURSES",
                         visible: false
                     }
                 }
    },
    {
        name: 'Contactus',
             state:
                 {
                     url:'/contactus',
                     templateUrl: '../views/contactus.html',
                     data: {
                         text: "CONTACTUS",
                         visible: false
                     }
                 }
    },
    {
        name: 'Account',
             state:
                 {
                     url:'/account',
                     templateUrl: '../views/account.html',
                     data: {
                         text: "ACCOUNT",
                         visible: false
                     }
                 }
    },
    {
        name: 'Staff',
             state:
                 {
                     url:'/staff',
                     templateUrl: '../views/stadium.html',
                     data: {
                         text: "STAFF",
                         visible: false
                     }
                 }
    },
    {
        name: 'Signup',
             state:
                 {
                     url:'/signup',
                     templateUrl: '../views/signup.html',
                     data: {
                         text: "SIGNUP PAGE",
                         visible: false
                     }
                 }
    },
    {
        name: 'Book',
        state:
            {
                url:'/book',
                templateUrl: '../views/book.html',
                data: {
                    text: "SIGNUP PAGE",
                    visible: false
                }
            }
    }

    ];

    var app = angular.module('sportsticket', [
        'ui.router',
        'ngCookies'
    ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            angular.forEach(states, function(state) {
                $stateProvider.state(state.name, state.state);
            });
        });

})();