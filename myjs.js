let arr1 = [3, 5, 1, 8, -3, 7, 8]
let arr2 = [7, 12, 6, 9, 20, 56, 89]
let arr3 = []
let arr4 =[0, 0, 0, 0, 0, 0]

function timMin(arrs){
    if(arrs.length == 0)
        return -1;
    let min = arrs[0]
    for (let i = 0; i < arrs.length; i++) {
        if(arrs[i] < min){
            min = arrs[i]
        }
    }return min
}
let min = timMin(arr3)
alert(min)