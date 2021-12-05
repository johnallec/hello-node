const array = ["GET","POST","DELETE","PUT"];

exports.handleRequest = function(request, response){
    let b = false;
    array.forEach((m) => {
        b = b || (m==request.method);
    });
    
    if(b){
        response.writeHead(200, {'Content-Type' : 'text/plain'});
    }
    switch(request.method){
        case 'GET':
            handleGetRequest(response);
            break;
        case 'POST':
            handlePostRequest(response);
            break;
        case 'PUT':
            handlePutRequest(response);
            break;
        case 'DELETE':
            handleDeleteRequest(response);
            break;
        default:
            handleBadRequest(response);
            break;
    }
    console.log('Process completed.');
};

function handleGetRequest(response){
    response.end('Get action is requested');
}

function handlePostRequest(response){
    response.end('Post action is requested');
}

function handlePutRequest(response){
    response.end('Put action is requested');
}

function handleDeleteRequest(response){
    response.end('Delete action is requested');
}

function handleBadRequest(response){
    console.log('Unsupported request');
    response.writeHead(400, {'Content-Type' : 'text/plain'});
    response.end('Bad request');
}