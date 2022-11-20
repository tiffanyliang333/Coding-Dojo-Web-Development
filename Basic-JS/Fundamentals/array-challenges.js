// Question 1
function alwaysHungry(arr){
    var foodCount = 0;
    for (var i=0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            foodCount++;
        }
    }if(foodCount == 0){
        console.log("I'm hungry");
    }
}
// Question 2
function highPass(arr, cutoff){
    var filteredArr = [];
    for (var a=0; i<arr.length;i++){
        if(arr[a] > cutoff){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6,8,3,10,-2,5,9],5);
console.log(result);
// Question 3
function betterThanAverage(arr){
    var sum=0
    for(var x=0; x<arr.length; x++){
        sum = sum + arr[x];
    }
    var avg=sum/arr.length;
    var count=0
    for (var i=0; i<arr.length; i++){
        if(arr[i] > avg){
            count++
        }
    }
    return count;
}
// Question 4
function reverse(arr){
    var left = 0;
    var right = arr.length-1;
    while(left<right){
        var temp = arr[left];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
// Question 5
function fibonacciArray(n){
    var fibArr = [0,1];
    var sum=0;
    for (var b=0; b<fibArr.length; b++){
        sum = fibArr[fibArr.length-1] + fibArr[fibArr.length - 2];
        fibArr.push(sum);
    }
    return fibArr;
}