var age=30;
console.log(age);

function variableScope() {
    var test ="hello";
    console.log(test);

}
variableScope();

function blockScope(){

    if (true) {
        let name1:string ="typeScript";
        const name2:string = "javaScript";
        console.log(name1);
        console.log(name2);
    }
}
blockScope();


