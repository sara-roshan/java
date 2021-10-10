var counter=0;


function addNumber(){
    let task1=document.getElementById("Task1");
    let task2=document.getElementById("Task2");
    let task3=document.getElementById("Task3");
    let task4=document.getElementById("Task4");
    let task5=document.getElementById("Task5");

    if(counter%5==0){
        task1.value= document.getElementById("adder").value;
    }else if(counter%5==1){
        task2.value= document.getElementById("adder").value;
    }else if(counter%5==2){
        task3.value= document.getElementById("adder").value;
    }else if(counter%5==3){
        task4.value= document.getElementById("adder").value;
    }else if(counter%5==4){
        task5.value= document.getElementById("adder").value;
    }

    document.getElementById("adder").value="";
    counter++;

}

function sort(){
    let task1=document.getElementById("Task1").value;
    let task2=document.getElementById("Task2").value;
    let task3=document.getElementById("Task3").value;
    let task4=document.getElementById("Task4").value;
    let task5=document.getElementById("Task5").value;

    let arr=[];

    arr.push(task1);
    arr.push(task2);
    arr.push(task3);
    arr.push(task4);
    arr.push(task5);

    if(isNaN(arr[0])){
        arr.sort();
    } else {
        arr.sort(function(a,b){return a-b;});
    }
    document.getElementById("Task1").value=arr[0];
    document.getElementById("Task2").value=arr[1];
    document.getElementById("Task3").value=arr[2];
    document.getElementById("Task4").value=arr[3];
    document.getElementById("Task5").value=arr[4];

}



