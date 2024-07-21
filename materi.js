// Looping
// tips arah > untuk pertambahan arah < untuk pengurangan
// while()
// let i = 0;
// while(i < 5){
//     console.log(i)
//     i++
// }
//for()

// for (let i = 0; i <= 5; i++){
//     console.log(i);
// }

// let nama = 'rudy';

// for (let i = 0; i < nama.length; i++){
//     console.log(nama[i]);
// }

// let name = 'pani';
// result ='';
// for (let i = name.length-1; i >= 1; i--){
// result += name[i];
// }
// console.log(result);

// nested loop

// for (i = 0; i < 3;i++ ){
//     for(let o= 0; o <9; o++){
//         console.log(o);
//     }
//     console.log('longkap pilar'); // merupakan sebuah longkapan dari setiap pilarnya
// }
/*
Nested Looping merupakan sebuah loop di dalam loop
maksudnya adalah, loop pertama itu sebagai pilar untuk mengulang berapa kali pilar tersebut
loop kedua adalah jumlah dari isi dipilarnya, jika i nya saya set 2 maka pilarnya ada 2, dan jika o 
saya set 6 maka isi dari pilarnya adalah 6
*/

// counter pada looping

// let i = 0;
// while (i < 100){
//     console.log(i)
//     i+=2;
// }

// looping bersarang if else
// let i = 0;
// while(i<50){
//     if(i % 2 === 0 ){
//         console.log(`${i}  adalah genap`)
//     }else{
//         console.log(`${i} adalah ganjil`)
//     }
// i++;
// }



/*
FIZZBUZZ PROBLEM

jika i === kelipatan 3 maka yang muncul akan fizz
jika i === kelipatan 5 maka yang muncul akan buzz
jika i === kelipatan 3 dan 5 maka yang muncul fizzbuzz
jika i bukan kelipatan 3 atau 5 maka yanng muncul hanya angka
*/

for(let i=0; i<100;i++){
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log('FizzBuzz')
    }else if (i % 3 === 0 && i % 5 !==0){
        console.log('Fizz')
    }else if(i % 5 === 0 && i % 3 !==0){
        console.log('Buzz')
    }else{
        console.log(i);
    }
};