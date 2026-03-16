// // let arr = [5,10,15,20,25]

// // for(let i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i]);
    
// // }

// let total = 0;
// let arr = [10,20,30,40]
// for(let i=0;i<arr.length;i++)
// {
//     total = total+arr[i]
// }
// console.log(`Total = ${total}`);

let numbers = [45,12,89,33,21]

let largest = numbers[0];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]>largest)
    {
        largest=numbers[i];
    }

    
}
    console.log(`Largest number = ${largest} `);