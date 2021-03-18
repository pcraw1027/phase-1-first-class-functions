function receivesAFunction(callBackFunc) {
    return callBackFunc()
}

function returnsANamedFunction() {
    return function aNamedFunc() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
} 