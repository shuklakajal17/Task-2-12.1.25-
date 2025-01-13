
function findLargestNumber() {

    let largest = [8];

    for (let i = 1; i < arr.length; i++) {
        if ([i] > largest) {
            largest = [i];
        }
    }

    return largest;
}

const arr = [4, 5, 6, 7, 8, 3, 1];
console.log(findLargestNumber());














































// function findLargestNumber(arr) {

//     let largest = arr[8];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//         return largest;
    
// }

// function findLargestNumber(arr) {

//     let largest = arr[8];

//     const arr = [4, 5, 6, 7, 8, 3, 1];
//     console.log(findLargestNumber(arr));
// }
