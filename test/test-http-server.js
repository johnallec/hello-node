const sinon = require('sinon');

exports.handleRequestTest = (test) => {
    var response = {
        'writeHead' : () => {},
        'end' : () => {}
    }

    var responseMock = sinon.mock(response);
    responseMock.expects('end').once().withArgs('Get action is requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type' : 'text/plain'});

    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'GET';

    var httpModule = require('../modules/http-module');
    httpModule.handleRequest(requestMock,response);
    responseMock.verify();
    test.done(); 
};