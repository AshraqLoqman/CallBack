async function getDisposableIncome()
{
    let Salary=await getSalary()
    salary=await subTax()
    salary=await subRent()
}


const getSalary=(sal)=>sal=1000
const subTax=(sal)=>sal-sal*0.07
const subRent=(sal)=>sal-500