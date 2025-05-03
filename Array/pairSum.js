//find element closest to complement using 
//binary search

function findClosest(arr, lo, hi, complement){
    let res = arr[lo];

    while(lo<=hi){
        let mid = Math.floor(lo+hi)/2;

        //update answer if we find a closer element
        if(Math.abs(arr[mid] - complement) < Math.abs(res-complement)){
            res = arr[mid];
        }

        //if there is a tie, then we pick the larger value
        else if(Math.abs(arr[mid] - complement) === Math.abs(res-complement)){
            res = Math.max(res, arr[mid]);
        }

        if(arr[mid] === complement){
            return arr[mid];
        }else if(arr[mid] < complement){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    return res;
}


//find pair with sum closest to target and max absolute differnce
function sumClosest(arr, target){
    let n = arr.length;
    arr.sort((a,b)=> a-b);
    let res = [];

    let minDiff = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<n-1; i++){
        let complement = target - arr[i];
        let closest = findClosest(arr, i+1, n-1, complement);
        let currDiff = Math.abs(target - arr[i] - closest);
        if(currDiff < minDiff){
            minDiff = currDiff;
            res = [arr[i], closest]
        }
    }

    return res;
}

//driver code
let arr = [5,2,7,1,4];
let target = 10;

let res = sumClosest(arr, target);
if(res.length > 0){
    console.log(res[0], res[1]);
}