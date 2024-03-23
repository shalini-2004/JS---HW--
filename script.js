//  ........... [ BASIC ARITHMETIC QUESTIONS ]........

// // .Q.1.........

// let a=20;
// let b=10;
// console.log("sum = ",a+b)
// console.log("difference = ",a-b)
// console.log("product = ",a*b)
// console.log("quotient = ",a/b)
// console.log("modulus = ",a%b)

// // .Q.2.................

// let a=10;
// let b=5;
// if(a%b==0){
//     console.log(a/b)
// }

// // .Q.3................

// let a=6;
// let b=3;
// console.log(a**b)

// // .Q.4................

// let a=27;
// let b=5;
// console.log(a%b)

// // .Q.5................

// let a=10;
// let b=20;
// let c=30;
// let d=25;
// let e=35;

// let x=(a+b+c+d+e)
// console.log(x/5)

// // .Q.6................

// let cp=20;
// let sp=50;
// console.log("profit is : ",sp-cp)

// // .Q.7..................

// let n=25;
// console.log("last no. of n is :",n%10)

// // .Q.8..................

// let x=58;
// let y= Math.floor(x/10);
// console.log("first digit of x :",y)
// console.log("last digit of x :",(x%10))

// // .Q.9.................

// let f=10;
// let s=38;
// let t=-47;
// if (f>s && f>t){
//     console.log("Largest no. is :",f)
// }
// else if(s>f && s>t){
//     console.log("Largest no. is :",s)
// }
// else{
//     console.log("Largest no is :",t)
// }

// // .Q.10.............

// let x=20;
// if (x%2==0){
//     console.log("EVEN")
// }
// else{
//     console.log("ODD")
// }

// // .Q.11..............

// let n=23;
// let c=0;
// let i=1
// while(i<=n){
//     if (n%i==0){
//         c+=1
//     }
//     i+=1
// }
// if (c==2){
//     console.log("YES, it is a prime no.")
// }
// else{
//     console.log("NO, this is not prime no.")
// }

// // .Q.12...............

// let c=27;
// let f=77;
// console.log("celsius to fahrenheit = ",(c*9/5)+32)
// console.log("fahrenheit tpo celsius = ",(f-32)*9/5)



/*
In the Celsius to Fahrenheit conversion, we multiply the Celsius temperatureby 9/5 because there are 9/5 degrees Fahrenheit per degree Celsius. 
Then we add 32 because that's the offset used in the Fahrenheit scale to align with the zero point of the Celsius scale.

In the Fahrenheit to Celsius conversion, we first subtract 32 from the Fahrenheit temperature to remove the offset, and 
then we multiply by 9/5 because there are 9/5 degrees Celsius per degree Fahrenheit.

*/