/*AddEmployeePayroll UC-1 => Modify Employee Payroll Class with new Attributes and Getters and Setters */
window.addEventListener('DOMContentLoaded', (event) => {
    const name =document.querySelector('#name');
    const textError =  document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0)
        {
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent= "";
        }
        catch(e)
        {
            textError.textContent = e;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent= salary.value;
    salary.addEventListener('input', function() {
    output.textContent = salary.value;
   });
});

/*AddEmployeePayrol UC-3 => On Save Create Employee Payroll Object */
/* const save=(event)=>
{
    try{
        let employeePayrollData= createEmployeePayroll();
    }
    catch(e)
    {
        return;
    }
}*/

/*AddEmployeePayrol UC-4  => Saving Employee Payroll to Local Storage */
const save =()=>
{
    try{
        let employeePayrollData= createEmployeePayroll();
        createAddUpdateStorage(employeePayrollData);
    }
    catch(e)
    {
        return(e);
    }
} 
const createEmployeePayroll=()=>{
    let employeePayrollData=new EmployeePayrollData();
    try{
        employeePayrollData.name=getInputValueById('#name');
    }
    catch(e)
    {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
    }

    const getSelectedValues=(propertyValue)=>{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item=>{
        if(item.checked)selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById=(id) => {
    let value = document.querySelector(id). value;
    return value;
}
const getInputElementValue =(id) =>
{
    let value = document.getElementById(id).value;
    return value;
}


function createAddUpdateStorage(employeePayrollData){
    let employeePayrollList= JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList !=undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList=[employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

/*AddPayroll UC-5 =>  Reset the Employee Payroll Form */
const resetForm=() =>
{
    setValue('#name','');
    setValuebyClassName('.text-error','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValuebyClassName('.salary-output','700000');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','january')
    setValue('#year','2023');
}
const unsetSelectedValues=(propertyValue)=>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked=false;
    });
}
const setValue=(id,value)=>{
    const element = document.querySelector(id);
    element.value=value;
  }
  
const setValuebyClassName=(id,value)=>{
    const element=document.querySelector(id);
    element.textContent=value;
  }

 