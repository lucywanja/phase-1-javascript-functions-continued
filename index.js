// code your solution here

// function exists
function saturdayFun(){
}

// use the default activity 'roller-skate' when no arguments are passed 
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log (saturdayFun());

//permits the default activity to be overriden
console.log (saturdayFun("bathe my dog"));  

// mondayWork function expression exists & use the default activity 'go to the office' when no arguments are passed

 const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
 }

 console.log(mondayWork()); 

//  permits the default activity to be overriden
console.log(mondayWork("work from home"));

// defines wrapAdjective function

// function wrapAdjective(flair = "*") {
//     return function(adjective = "special") {
//       return `You are ${flair}${adjective}${flair}!`;
//     }
//   }
//   const encouragingPromptFunction = wrapAdjective("||");
//   console.log(encouragingPromptFunction("a dedicated programmer"));

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  const encouragingPromptFunction = wrapAdjective("||");
  console.log(encouragingPromptFunction("a dedicated programmer"));
  
  function wrapAdjectiveWithHardWorker(flair) {
    return function(adjective = "a hard worker") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  const encouragingPromptFunctionWithHardWorker = wrapAdjectiveWithHardWorker("*");
  console.log(encouragingPromptFunctionWithHardWorker());

 
