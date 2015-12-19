/* Sync */
function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] triggering add for ", x, " and ", y);
    var addResult = addSync(x,y);
    console.log("[SC] result = ", addResult);
}

/* Async - Callback*/
function addAsync(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        if (typeof onResult === 'function')
            onResult(result);
    },3000);
}

function addAsyncClient(x,y){
    console.log("[SC] triggering add for ", x, " and ", y);
    addAsync(x,y, function(addResult){
        console.log("[SC] result = ", addResult);
    });
}

/* Async - Events */
var asyncAdder = (function(){
    var _callbacks = [];
    return {
        add : function(x,y){
            console.log("[SP] processing ", x , " and ", y);
            setTimeout(function(){
                var result = x + y;
                console.log("[SP] returning result");
                _callbacks.forEach(function(callback){
                    callback(result);
                });
            },3000);
        },
        subscribeForResult : function(callback){
            _callbacks.push(callback);
        }
    }
})();

/*asyncAdder.subscribeForResult(function(result){
   console.log("[SC] result = ", result);
});
asyncAdder.add(100,200);*/

/* Async - Promise*/

function addAsyncPromise(x,y){
    var promise = new Promise(function(resolve, reject){
        console.log("[SP] processing ", x , " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        },3000);
    });
    return promise;
}







