function getSalary(){setTimeout(()=>
    {
        return 1000;
        }, 10);
    }
    
    function subTax(salary){
      return salary-salary*0.07
    }
    
    function subRent(salary){
      return salary-500
    }
    
    function getIncome(){
      let salary=getSalary()
      salary=subTax(salary)
      salary=subRent(salary)
      return salary
    }
    
    console.log(getIncome())
    