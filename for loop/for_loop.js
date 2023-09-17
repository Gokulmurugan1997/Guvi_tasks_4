// for loop

var bikes=["company=yamaha","model=MT 15","price =150000"]
    
for (let i=0; i<bikes.length;i++){
        console.log(bikes[i]);
}


// for in

var details="details of bike is ";
var bikes1={
    company:"yamaha",
    model:"MT 15",
    price :"150000"

}
 for (var i in bikes1) {
    var details = details + bikes1[i] + " ";
    
 }
 console.log(details);

 //for of

 var bikes2=["company=yamaha","model=MT 15","price =150000"];

 for (var index of bikes2){
    console.log(index);
 }

 //for each

 var bikes2=["company=yamaha","model=MT 15","price =150000"];

 bikes2.forEach((element,index)=> console.log(element,index));