function add(a, b) {
   var aList = a.split('').reverse();
   var bList = b.split('').reverse();
   var max = Math.max(aList.length, bList.length);
   var cList = [];
   var flag = 0;

    for (var i = 0, len = max; i < len; i++) {
       var tmp = (+aList[i] || 0) + (+bList[i] || 0) + flag;
        flag = 0;
        if(tmp > 9) {
           tmp -= 10;
           flag = 1;
       }

       cList.push(tmp);
   }

    if(flag) {
        cList.push(1)
    }

    return cList.reverse().join('')
}

module.exports = add
