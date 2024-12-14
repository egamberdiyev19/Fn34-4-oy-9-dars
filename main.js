// 1. at

// 1-masala
let num11 = [5, 32, 21, 24, 64, 51];
let num112 = num11.at(-1);
console.log(num112);
// 2-masala
let num12 = [10, 23, 41, 21, 87, 30];
for (let i = 0; i < num12.length; i++) {
  if (i % 2 == 0) {
    num12.at(i);
  }
}
console.log(num12);
// 3-masala
function changeElemaent(arr, index) {
  arr[index] = "hello";
  return arr;
}
let arr = [2, 8, 4, 9, 7];
let index = 2;
console.log(changeElemaent(arr, index));
// 2. join
// 1-masala
function mereArr(arr21, element21) {
  return arr21.join(element21);
}
let arr21 = [11, 17, 19, 21];
let element21 = "*";
console.log(mereArr(arr21, element21));
// 2-masala
/*function moreArr22(arr22, sep) {
    let num22 = arr22.reverse();
    return num22.join(sep);
  }
  let num221 = [12, 31, 82];
  let result = reverseAndJoin(num221, '-');
  
  console.log(result); */
// 3-masala

let num23 = [12, 31, 82, 45, 60, 99];
for (let i = 0; i < num23.length; i++) {
  if (i % 2 == 1) {
    let res23 = num23.join();
    console.log(res23);
  }
}
// 3. toString
// 1-masala
let num31 = [2, 54, 23, 4];
let res31 = num31.toString();
console.log(res31);
//  2-masala
let num32 = [12, 31, 25, 45];
let res32 = num32.toString();
console.log(res32);
// 3-masala
function remo33(arr33) {
  let str33 = arr33.join("");
  str33 = str33.slice(0, -1);
  return str33;
}
let num33 = [12, 31, 82];
let result33 = remo33(num33);
console.log(result33);
// 5. concat
// 1-masala
function sum51(arr51, arr52) {
  let mer51 = arr51.concat(arr52);
  mer51.pop();
  return mer51;
}
let num511 = [12, 31, 82];
let num512 = [45, 60, 99];
let result51 = sum51(num511, num512);
console.log(result51);
// 2-masala
function sum52(arr521, arr522, arr523) {
  let mer52 = arr521.concat(arr522, arr523);
  mer52.pop();
  return mer52;
}
let num521 = [10, 32, 54];
let num522 = [20, 24, 23];
let num523 = [41, 52, 36];
let result52 = sum52(num521, num522, num523);
console.log(result52);
// 3-masala
function sum53(arr531, arr532) {
  let mer53 = arr531.concat(arr532);
  if (arr531 > 0 && arr532) {
    return mer53;
  }
}
let num531 = [-20, 24, 23];
let num532 = [41, -52, -36];
let result53 = sum53(num531, num532);
console.log(result53);
// 7. flat
//1-masala
let num71 = [10, 13, [2, 8], 15, 24];
let res71 = num71.flat();
console.log(res71);
// 2-masala
function res72(arr72) {
  return arr72.flat(2);
}
let num72 = [23, [21, [29, 8], 45], 98];
let run72 = res72(num72);
console.log(run72);
// 3-masala

let num73 = [1, [2, [3, [4, 5]]], 6, [7, [8, 9]]];

let result73 = num73.flat(3);

console.log(result73);
// 8. splice, toSpliced
// 1-masala
let num81 = [12, 53, 8, 10, 7];
num81.splice(2, 3);
console.log(num81);
// 2-masala
let num82 = [11, 31, 41, 25, 43];
num82.splice(0, 1, "he", "so");
console.log(num82);
// 3-masala
let num83 = [17, 65, 52, 6, 2];
num83.splice(2, 1, "food");
console.log(num83);
// 9. slice
// 1-masala
function num91(massiv91) {
  const n91 = massiv91.length;
  if (n91 % 2 !== 0) {
    return [massiv91[Math.floor(n91 / 2)]];
  } else {
    return [massiv91[Math.floor(n91 / 2) - 1], massiv91[Math.floor(91 / 2)]];
  }
}
let massiv91 = [1, 2, 3, 4, 5];
console.log(num91(massiv91));
// 2-masala
function num92(value, lethh) {
  return value.slice(-lethh);
}
let massiv92 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num92(massiv92, 3));
// 3-masala
function num93(value93) {
  let new93 = [];

  for (let i = 0; i < value93.length; i++) {
    if (i % 2 === 0) {
      new93.push(value93[i]);
    }
  }

  return new93;
}
let massiv93 = [1, 8, 93, 220, 21, 78];
console.log(num93(massiv93));
// 10. indexOf, lastIndexOf
// 1-masala
function num101(arr101, a101) {
  let counter101 = 0;

  for (let i = 0; i < arr101.length; i++) {
    if (arr101[i] === a101) {
      counter101 += i;
    }
  }

  return counter101;
}
let massiv101 = [12, 32, 13, 36, 57];
console.log(num101(massiv101, 2));
// 2-masala
function num102(arr102) {
  let n1011 = 0;
  let n1012 = arr102.length - 1;
  if (arr102.length === 0) {
    return 0;
  }
  return n1012 - n1011;
}
let massiv102 = [5, 11, 33, 25, 28];
console.log(num102(massiv102));
// 11. includes
// 1-masala
function num111(arr111) {
  for (let i = 0; i < arr111.length; i++) {
    if (i > 0) {
      return arr111.push(i);
    }
  }
}
let massiv111 = [-14, 12, -32, -54, 89];
console.log(num111(massiv111));
// 2-masala
function sum112(arr112, value112) {
  if (!arr112.includes(value112)) {
    arr112.push(value112);
  }
  return arr112;
}
let massiv112 = [13, 12, 31, 41];

console.log(sum112(massiv112, 3));
// 12. sort
// 1-masala
function sum121(arr121) {
  arr121.sort((a, b) => b - a);
  return arr121.slice(-3);
}
let num121 = [12, 5, 8, 130, 44];
console.log(sum121(num121));
// 2-masala
function sum122(arr122) {
  let one = arr122.slice(0, 3);
  one.sort((a, b) => a - b);
  return one;
}
let num122 = [10, 5, 8, 3, 15];
console.log(sum122(num122));
//13. reverse
// 1-masala
function sum131(arr131) {
  let tes131 = arr131.slice(0, -1).reverse();
  tes131.unshift(arr131[arr131.length - 1]);
  return tes131;
}
let num131 = [10, 28, 34, 44, 59];
console.log(sum131(num131));
// 2-masala
function sum132(arr132) {
  let tes132 = arr132.reverse();
  if (tes132.length > 2) {
    let use132 = Math.floor(tes132.length / 2);
    tes132.splice(use132, 1);
  }

  return tes132;
}
let num132 = [4, 48, 14, 30, 57];
console.log(sum132(num132));
// 3-masala
function sum133(arr133) {
  let tes1331 = arr133.reverse();
  let tes1332 = tes1331.reverse();
  return tes1332;
}
let num133 = [1, 15, 34, 56, 98];
console.log(sum133(num133));
// 14. for...of
// 1-masala
function sum141(arr141) {
  let counter141 = 0;
  let number141 = 0;
  for (let son of arr141) {
    if (son % 2 === 0) {
      counter141 += son;
      number141++;
    }
  }
  if (number141 > 0) {
    return counter141 / number141;
  } else {
    return 0;
  }
}

let num141 = [10, 15, 24, 25, 37];

console.log(sum141(num141));
// 2-masala
function sum142(arr142, value142) {
  let newArr142 = [];
  for (let element142 of arr142) {
    newArr142.push(element142 + value142);
  }
  return newArr142;
}

let num142 = [14, 29, 52, 12];
let add142 = 5;

let up142 = sum142(num142, add142);
console.log(up142);
// 3-masala
function sum143(arr143) {
  let new143 = [];
  for (let element143 of arr143) {
    if (element143 < 0) {
      new143.push(element143);
    }
  }
  return new143;
}

let num143 = [14, -28, 73, -34, 15, -86];
let add143 = sum143(num143);
console.log(add143);
// 15. for...in
// 1-masala
function sum151(arr151) {
  let summ151 = 0;
  for (let index151 in arr151) {
    summ151 += parseInt(index151);
  }
  return summ151;
}

let num151 = [54, 23, 33, 48];
let add151 = sum151(num151);
console.log(add151);
// 3-masala
function sum153(arr153) {
  let new153 = [];
  for (let index153 in arr153) {
    if (arr153[index153] > 0) {
      new153.push(index153);
    }
  }
  return new153;
}

let num153 = [10, -5, 20, 0, -30, 50];
let new153 = sum153(num153);
console.log(new153);
