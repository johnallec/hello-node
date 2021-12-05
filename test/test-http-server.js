const sinon = require('sinon');

exports.handleGetRequestTest = (test) => {
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

exports.handlePutRequestTest = (test) => {
    var response = {
        'writeHead' : () => {},
        'end' : () => {}
    }

    var responseMock = sinon.mock(response);
    responseMock.expects('end').once().withArgs('Put action is requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type' : 'text/plain'});

    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'PUT';

    var httpModule = require('../modules/http-module');
    httpModule.handleRequest(requestMock,response);
    responseMock.verify();
    test.done(); 
};

exports.handlePostRequestTest = (test) => {
    var response = {
        'writeHead' : () => {},
        'end' : () => {}
    }

    var responseMock = sinon.mock(response);
    responseMock.expects('end').once().withArgs('Post action is requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type' : 'text/plain'});

    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'POST';

    var httpModule = require('../modules/http-module');
    httpModule.handleRequest(requestMock,response);
    responseMock.verify();
    test.done(); 
};

exports.handleDeleteRequestTest = (test) => {
    var response = {
        'writeHead' : () => {},
        'end' : () => {}
    }

    var responseMock = sinon.mock(response);
    responseMock.expects('end').once().withArgs('Delete action is requested');
    responseMock.expects('writeHead').once().withArgs(200, {'Content-Type' : 'text/plain'});

    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'DELETE';

    var httpModule = require('../modules/http-module');
    httpModule.handleRequest(requestMock,response);
    responseMock.verify();
    test.done(); 
};

exports.handlePatchRequestTest = (test) => {
    var response = {
        'writeHead' : () => {},
        'end' : () => {}
    }

    var responseMock = sinon.mock(response);
    responseMock.expects('end').once().withArgs('Bad request');
    responseMock.expects('writeHead').once().withArgs(400, {'Content-Type' : 'text/plain'});

    var request = {};
    var requestMock = sinon.mock(request);
    requestMock.method = 'PATCH';

    var httpModule = require('../modules/http-module');
    httpModule.handleRequest(requestMock,response);
    responseMock.verify();
    test.done(); 
};