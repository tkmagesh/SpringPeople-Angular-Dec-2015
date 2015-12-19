'use strict';

describe('myApp.greet module', function() {

  beforeEach(module('myApp.greet'));

  describe('greet Controller', function(){

    it('should initialize name and message with empty string', inject(function($controller) {
        var dummyScope = {};
        $controller('greetController', { $scope : dummyScope });
        expect(dummyScope.name).toBe('');
        expect(dummyScope.message).toBe('');
    }));

    it('should populate the message when greeted', inject(function($controller){
        var dummyScope = {};
        $controller('greetController', {$scope : dummyScope});
        dummyScope.name ='Magesh';
        var expectedMessage = 'Hi Magesh, Have a nice day!';
        dummyScope.greet();
        expect(dummyScope.message).toBe(expectedMessage);
    }))

  });
});
