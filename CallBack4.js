async function getDisposableIncome()
{
    let salary=await getSalary()
    salary=await subtractTax(salary)
    salary=await subtractRent(salary)
    return salary;
}

function getSalary(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(33000)
        }, 1000);
    })
}

function subtractTax(salary){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(salary*0.75)
        }, 1000);
    })
}

function subtractRent(salary){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(salary-5000)
        }, 1000);
    })
}


async function Call(){
    let disposable=await getDisposableIncome()
    console.log(disposable)
}

Call()