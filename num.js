
    var x=-10;
    var z=90;
    var y=12;
    if(x>0 && z>0 &&y>0){
        console.log("positive sign");
    }
    else if(x<0 && z<0 && y<0){
        console.log("negative sign")
    }
    else{
        console.log("zero")
    }
    // function number(num,num2){
    //     if(num>num2){
    //         console.log(number);
    //     }

    // }
    // number();
    let findGreatest=(...nums)=>{
        let max=-Infinity;
        for(i=0 ;i<nums.length;i++){
         if(nums[i]>max){
             max=nums[i];
         };
        };
        return max;
    };
    console.log(findGreatest(1,2,3,4,5,6,7,8));
     
     for(a=0;a<=15;a++){
         if(a%2==0){
          console.log("is even");

         }
         else{
             console.log("is odd");
         }
     }
    //  var q=90;
    //  var w=12;
    //  var e=23;
    //  if(q>w && q>e){
    //      if(q>w){
    //          console.log(q +","+w+","+e);
    //      }
    //      else{
    //          console
    //      }
    //  }
var marks=[["ken",80],["man",77],["kan",88],["aisha",95],["john",68]];
avgmarks=0;
for(i=0;i<marks.length;i++){
    avgmarks+=marks[i][1];
    var avg=(avgmarks/marks.length);
}
console.log(avg)

sum=0;
for( var z=0;z<100;z++){
 if(z%3==3 || z%5==0){
     sum+=z;
 }
 console.log(sum);
}
var x,y,chr;
for(x=1;x<6; x++){
    for(y=1;y<x;y++){
        chr=chr+("*")
    }
    console.log(chr)
    chr="";

}
function alphabetic(str){
    return str.split("").sort().join("");
    
}
console.log(alphabetic("softwaredeveloper"));
 
function capitalise(str){
    var num=str.split("");
    var anum=[];
    for (i=0;i<num.length;i++){
        anum.push(num[i].charAt(2).toUpperCase()+num[i].slice(0));
    }
    return anum.join("");
}
console.log(capitalise("the android developer"));
function longest(str){
    var x=str.split("");
    var y=[];
    for (n=0;n<x.length;n++){
       y. push(x[n]).charAt(2).filter()+slice(1);
    }
    return y.join("");
}
console.log("The software development");
var numbers=[1,2,3,4,5,6,7];
var farm=numbers.filter(function(number){
    return number>4;
});
console.log(numbers);
function vowel(str2){
    var vowel_list="ieuoaIEUOA";
    var a=0;
    for(var y=0;y<str2.length;y++){
        if(vowel_list.indexOf(str2[y])!==1){
            a+=x;  
        }
    }
    return a
}
console.log(vowel("Welcome to Javascript"));


    
