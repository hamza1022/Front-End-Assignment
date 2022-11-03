const  row = 3;
const  col  = 3; 

for (let i= 1 ; i<= row; i++) {

    let shape = "";
for(let j = 1 ; j <=col ; j++){
    shape += "#";   

}
console.log(shape);
}

 
// Kite Shape



// Diamond Shape 

for (let i = 0; i <= 5; i++) {
    let shape2 = "";
    for (let j = 5; j > i; j--) {
      shape2 += " ";
    }
    for (let k = 0; k <= i; k++) {
      shape2 += "*";
    }
    for (let l = 1; l <= i; l++) {
      shape2 += "*";
    }
    console.log(shape2);
  }



  for (let i = 5 ; i>=0; i--) {
    let shape2 = "";
    for (let j = 5; j > i; j--) {
      shape2 += " ";
    }
    for (let k = 0; k <= i; k++) {
      shape2 += "*";
    }
    for (let l = 1; l <= i; l++) {
      shape2 += "*";
    }
    console.log(shape2);
  }





