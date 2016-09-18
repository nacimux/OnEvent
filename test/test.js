'use strict';

var expect = require('chai').expect;
var eventEmitter = require('../index.js');
describe('eventEmitter testing', function() {
    it('the on function should register an event handler', function() {
        var Callback = function () {
            console.log('all right ! ');
        };
        eventEmitter = new eventEmitter();
        eventEmitter.on('data',Callback);
        expect(eventEmitter.e['data']).not.to.be.empty;
    });
});