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
