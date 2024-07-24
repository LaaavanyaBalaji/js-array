//array intersection
let arr1=[1,2,3,4,5,6];
let arr2=[2,4,6,8,10];
let newarr=arr1.filter((element)=>arr2.includes(element));
console.log(newarr);



  //finding difference between two arrays
  let arra1=[1,2,3,4,5,6];
let arra2=[2,4,6,8,10];
let newarra=arra1.filter((element)=>!arra2.includes(element));
let newarra1=arra2.filter((element)=>!arra1.includes(element));


console.log(newarra,newarra1);

//rotatearray
function rotateArray(arr, rotateBy) {
	const n = arr.length;
	rotateBy %= n;

	return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}

const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(originalArray, 2);
console.log(rotatedArray);

//remove duplicates
let arraydup=[1,2,2,3,3,4,4,5]
console.log(...new Set(arraydup))

let sum = 0;

for (let i = 0; i < 5; i++) {

    if (i % 2 === 0) 
      


    sum += i;

}

console.log(sum);

// //longest
function longest(str) {
  let arr = str.split(' ');
  let long= 0;
  let arrl=null;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > long){
    long = arr[i].length;
    arrl=arr[i];
     }
  }
  return arrl ;
}
console.log(longest("I am Laaavanya Balaji"));


//majority element


function findMajority(arr)
{
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let count = map.get(arr[i]) + 1;
            if (count > arr.length / 2) {
                console.log(arr[i]);
                return;
            }
            else
                map.set(arr[i], count);
        }
        else
            map.set(arr[i], 1);
    }
    console.log(" No Majority element");
}

let a = [ 2, 2, 2, 2, 5, 5, 2, 3, 3 ];

findMajority(a);

//array of arrays
let int=[[2,3],[3,4],[2,3]];
console.log(int);
console.log(int[2][1]);

//removespecificIndex
function removeItem(arr,value){ 
  const index = arr[value-1];
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
let arr=[1,2,3,4];
console.log(removeItem(arr,2));


//insertatspecificindex
const items = [1, 2, 3, 4, 5]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
]

const result = insert(items, 1, 10)

console.log(result)





