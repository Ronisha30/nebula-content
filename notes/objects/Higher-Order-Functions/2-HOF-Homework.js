// 1.   Write a higher order function that manipulates every number in an array 
//      Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]

const changeNums = [3, 6, 9, 12, 18] ;
  
    
//Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
const doubler = changeNums.map(prev=> prev *2);

 //Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
const halves = changeNums.map(prev=> prev * .5);
    
    //Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]
const pow = changeNums.map(prev => prev * prev );


// // console.log(mapOver([1,2,3,4,5], doubler))
// // what it looks like using map
// // const mapOver = [1,2,3,4,5].map(doubler)\
console. log(doubler, halves, pow);


// 2.   Write a higher order function that calculates some features of a string
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
        const saying = ['Howdy Partner']
        const outcome = saying.reduce((w)=>saying.length)
        console.log(outcome);

//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
        const vowelCon = ["a", "e", "i", "o", "u"];
        const saying = ["Howdy Partner!"];
        
        saying.forEach((saying) => {
          const newStr = saying.split("");
          let vowelLetters = 0;
          newStr.forEach(x => {``
            if(vowelCon.includes(x)){
              vowelLetters++;
            }
          });
          console.log (vowelLetters);
        });
//      Ex: stringInfo(capitals, 'Howdy Partner!') => 2
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2


// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18
        const minzNums = [7, 14, 21, 28, 35];
        let output = (minzNums.reduce((alpha, beta) => alpha + beta));
        console.log(output);  