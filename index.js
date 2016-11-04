function receivesAFunction(callback){
  var call = callback()
}

function returnsANamedFunction(){
  var worktime = function timeToWork(){
    console.log('Working')
  }
  return worktime
}

function returnsAnAnonymousFunction(){
    return function(){
    console.log('hello')
  }

}
