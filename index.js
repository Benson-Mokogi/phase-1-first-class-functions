function receivesAFunction(callBack){
    callBack();   
}

function returnsANamedFunction(){
    const func = function namedFunction(){
        Return ("Hello, there")
    }
    return(func);
}
function returnsAnAnonymousFunction(){
    return(function(){'Hello, world!'});
}