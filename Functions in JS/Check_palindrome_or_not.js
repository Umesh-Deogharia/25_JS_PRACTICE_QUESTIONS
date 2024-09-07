let PalindromChecker = (str) =>{
    let new_str = str.split('').reverse().join('');
    if (str === new_str) {
        console.log('The Word is Palindrome')
    }else{
        console.log('The Word is not a Palindrome');
    }
}
PalindromChecker('lool');