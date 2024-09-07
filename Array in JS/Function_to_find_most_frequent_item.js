// Write a javascript program to find the most frequent item of an array


let FindFrequentNumber = (arr) => {
    let frequentNumber = {};
    arr.forEach((item) => {
        if(frequentNumber.hasOwnProperty(item)){
            frequentNumber[item]++;
        }else{
            frequentNumber[item] = 1;
        }
    });
    let ans = Object.keys(frequentNumber).reduce((acc, curr) => {
        return frequentNumber[acc]> frequentNumber[curr] ? acc : curr;
    })
    return ans;
}

console.log(FindFrequentNumber([1,2,3,12,2,3,12,1,2,3,2121]));