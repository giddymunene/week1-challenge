const netSalary = grossSalary - (tax + nhif + nssf);
function tax(salary){
    if (salary<=288000){
    return ("10%")}
    
    else if(salary=>288001 && salary <=388000){
        return"25%"
        }
    else if(salary=>388001 && salary <=6000000){
            return"30%"
            }
            else if(salary=>6000001 && salary <=9600000){
                return"32.5%"
                }
                else(salary >9600000)
                {
                    return"35%"
                    }
        }
    
    console.log (tax(70000))