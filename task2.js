'use strict'; 


let money = +prompt("Your monthly budget?", "10"),
    time = prompt("enter current date in format YYYY-MM-DD", "2019-07-21");
    


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    arrIncome: {},
    savings: false
    };

let c = prompt("How many mandatory expense item for this month?", "0");

c = Number(c);
console.log(c+1);

// for(let i = 0; i < c; i++) {
//     let a = prompt("Enter a mandatory expense item for this month.", ""),
//         b = prompt("How much will it cost?", "0");

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) { 
//         console.log("done")
//     } else {
//         alert("You can't skip this");
//         i--;
//     }
//     let d = i + "." + a;
//     appData.expenses[d] = b;
// };

// let i = 0;

// while (i<c) {
//     let a = prompt("Enter a mandatory expense item for this month.", ""),
//         b = prompt("How much will it cost?", "0");

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) { 
//         console.log("done")
//     } else {
//         alert("You can't skip this");
//         i--;
//     }
//     let d = i + "." + a;
//     appData.expenses[d] = b;
//     i++;
// };

let i = 0;

do {
    let a = prompt("Enter a mandatory expense item for this month.", ""),
        b = prompt("How much will it cost?", "0");
    
    i++
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) { 
        console.log("done")
    } else {
        alert("You can't skip this");
        i--;
    }
    let d = i + "." + a;
    appData.expenses[d] = b;
    
} while (i<c);

appData.moneyPerDay = appData.budget/30;



if(appData.moneyPerDay <= 100) {
    appData.WealthLevel = "low"
} else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
    appData.WealthLevel = "average"
} else if (appData.moneyPerDay > 2000) {
    appData.WealthLevel = "high"
} else {
    alert("Something went wrong")
}

alert("daily budget: " + appData.moneyPerDay + " Your wealth level is: " + appData.WealthLevel);


