// code your solution here
function saturdayFun(param1) {
  if (param1 === "bathe my dog") {
    return "This Saturday, I want to bathe my dog!";
  }
  return "This Saturday, I want to roller-skate!";
}

function mondayWork(param2) {
  if (param2 === "work from home") {
    return "This Monday, I will work from home.";
  }

  return "This Monday, I will go to the office.";
}
function wrapAdjective(param1) {
  if (param1 === "*") {
    return function (innerParam) {
      return `You are *${innerParam}*!`;
    };
  }
  if (param1 === "||") {
    return function (innerParam) {
      return `You are ||${innerParam}||!`;
    };
  }
}
