var count = 0;
console.log('Created count var');

function testPromise(){
  var thisPromiseCount = count++;
  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>');

  var promise1 = new Promise(function(resolve,reject){
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise started (<small>Async code started</small>)<br/>');
    window.setTimeout(function() {
      // We fulfill the promise !
      resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
  });

  promise1.then(function(val){
    log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
  }).catch(function(error){
    console.log('Handle rejected promise ('+ error +') here.');
  });

  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');

}

window.onload = function() {
  if (window.Promise) {
    console.log('Your browser support promises!');
    var btn = document.getElementById("btn");
    btn.addEventListener("click",testPromise);

  } else {
    console.log('Promises in your web browser is not supported!');
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
  }
};
