module.exports = function reverse (n) {
    let str = n.toString();

    if(str[0] === '-'){
        let reverseStr = str.replace('-', '').split('').reverse().join('');
        return reverseStr;
    }else{
        let reverseStr = str.split('').reverse().join('');      
        return reverseStr;  
    }
    }
