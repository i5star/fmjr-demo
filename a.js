'use strict';
var a = [];
var i = null;
function logI() {
    console.log(i);
}
for (i = 0; i < 10; i++) {
  a[i] = logI;
}
a[6](); // 6
a[0]();
logI();