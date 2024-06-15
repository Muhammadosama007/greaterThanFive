// const arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// const arr2=[];
// function greaterThanFive()
// {
// for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>5)
//             {
//                 arr2.push(arr[i]);
//             }
//         }
//         return console.log(arr2);
// }
// greaterThanFive();
// function firstIndex()
// {
//     return console.log(arr2[0]);
// }
// firstIndex();
// function allValue()
// {
//     for(let i=0;i<arr.length;i++)
//         {
//             console.log(arr[i]);
//         }
//         return arr;
// }
// allValue();

const arr3=[
    {
        fname:"osama",
        age:20,
        salary:400000,
    },
    {
        fname:"ali",
        age:40,
        salary:800000,
    },
    {
        fname:"ali",
        age:50,
        salary:200000,
    }
]

const greaterSalary=arr3.filter(a=>a.salary>500000);
console.log(greaterSalary);

const AliName=arr3.find(a=>a.fname=="ali"); //return only first index with name ali
console.log(AliName);

const Ali=arr3.filter(a=>a.fname=="ali");//return all index with name ali
console.log(Ali);

const SohaibName=arr3.filter(a=>a.fname=="sohaib");
console.log(SohaibName);
const Sohaib=arr3.find(a=>a.fname=="sohaib");
console.log(Sohaib);

//map returns new array and input changed value in it
//foreach return old array with changed value do not create new array and most of the time we use foreach