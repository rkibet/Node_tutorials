// const person={
//     name:'Ronald Kibet',
//     Age:30
// }

// module.exports=person
console.log('file path',__filename)
console.log('directory part',__dirname)
class Person{
    constructor(name,age){
       this.name=name;
       this.age=age;
    }
    greetings(){
        console.log(`Good Morning ${this.name} You are ${this.age} Years Old`);
    }
}

module.exports =Person