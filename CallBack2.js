function getSalary(cb1,cb2,cb3){
    let salary
    setTimeout(() => {
        salary=1000
        salary=cb1(salary)
        salary=cb2(salary)
        cb3(salary)
    }, 500);
}

const subTax=(sal)=>sal-sal*0.07
const subRent=(sal)=>sal-500

function getIncome(){
    getSalary(subTax,subRent,console.log)
}

getIncome()