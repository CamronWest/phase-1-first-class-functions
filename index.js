function Spy (){
    console.log("chau-spies");
}

chai (() => {
    console.log("chai");
});

function receivesAFunction(value){
   value()
}

function returnsANamedFunction(){
    return function name(){
        console.log("The man")        
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("unknown funciton")
    }
}