//$('p').addClass("test");

var db = null;
var request = window.indexedDB.open('demo',2);

request.onsuccess = function(){
    db = request.result;
    
}
request.onerror = function(){
    console.onerror('Something went wrong!');
}