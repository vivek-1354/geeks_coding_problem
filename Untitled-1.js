//Function to check if array is sorted and rotated.
// checkRotatedAndSorted(arr, num)
// {
//     let res;
//     if(arr[1] > arr[0]){
//         for(let i = 2; i<num; i++ ){
//             if(arr[i] < arr[i-1]){
//                 for(let j = i+1; j< num; j++){
//                     if(arr[j]> arr[i]){
//                         res = "Yes"
//                     }else{
//                         res = "No"
//                     }
//                 }
//             }
//         }
//         return res
//     }
//     if(arr[1] < arr[0]){
//         for(let i = 2; i<num; i++){
//             if(arr[i] > arr[i-1]){
//                 for(let j = i+1; j<num; j++){
//                     if(arr[j] < arr[i]){
//                         res = "Yes"
//                     }else{
//                         res = "No"
//                     }
//                 }
//             }
//         }
//         return res
//     }
// }


