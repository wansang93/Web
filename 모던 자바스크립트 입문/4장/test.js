function f() {
    console.log(a);  // undefined
    var a = 'local';
    console.log(a); // local
    return a;
}