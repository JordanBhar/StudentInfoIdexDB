
console.log("hello")

let db;
let openRequest = indexedDB.open("myDB",1);

openRequest.onupgradeneeded = function(e) {
    var DB = e.target.result;
    if(!DB.objectStoreNames.contains("people")) {
        DB.createObjectStore("people");
    }
};

openRequest.onsuccess = function(e) {
    db = e.target.result;
    // ..do something here
};
openRequest.onerror = function(e) {
    //console.dir(e);
    // ..do error notification
}


function addPerson(){
    var person = {name:"Jordan" , email:"jordan.bhar@hotmail.com", created: new Date()}

    //open a read/write transaction
    var transaction = db.transaction(["people"],"readwrite");

    //create object store
    var peopleStore = transaction.objectStore("people");

    //make a request to add a new item

    var request = peopleStore.add(person , "1")
}
