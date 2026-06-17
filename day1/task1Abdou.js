const student = [{name:"ahmad",age:20,grade:14},{name:"sara",age:22,grade:18},{name:"ali",age:19,grade:9},{name:"yasmine",age:21,grade:16}]
//task1
for(let i=0;i<student.length;i++){
    console.log(
        "name:" ,student[i].name,
        "age:" ,student[i].age,
        "grade:" ,student[i].grade
    )
}
//task2
for(let i=0;i<student.length;i++){
    if(student[i].grade>=10){
      console.log(
        "name:" ,student[i].name,
        "age:" ,student[i].age,
        "grade:" ,student[i].grade,
        "passe"
      )
    }
    else{
      console.log(
        "name:" ,student[i].name,
        "age:" ,student[i].age,
        "grade:" ,student[i].grade,
        "fail"
      )   
    }
}
//task3
let count=0
for(let i=0;i<student.length;i++){
    if(student[i].grade>=10){count++}
    
   }
 console.log("number of passed students :",count)
 //task4
 let max=student[0].grade 
 for(let i=0;i<student.length;i++){
    if(student[i].grade>max){max=student[i].grade} 
   }
 console.log("the student with the highest grade is :",max.name,"with grade",max.grade)
//task5
function isAdult(age) {
    if(age>=18){
        console.log(student[i].name,"is adult")
        return true
    }
}
console.log("is ahmad an adult :", isAdult(student[0].age))
//task6
const saraobj = student.find(student => student.name ==="sara")
const passedStudents = student.filter(student => student.grade>=10)
console.log("find sara",saraobj)
console.log("students who passed",passedStudents)
//bonus task
student.push({name:"mandarina",age:26,grade:20})
console.log("the new array lenght",student.length)
student.sort((a,b)=>b.grade-a.grade)
console.log("students sorted :",student)
