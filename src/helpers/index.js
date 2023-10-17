export function getYearDifference(year){

    return new Date().getFullYear()- year;
}

export function calculateBrand(brand){
    let increment
    switch (brand) {
        case "1":
            increment = 1.30
            break;
        case "2":
            increment = 1.150
            break;
        case "3":
            increment = 1.05
            break;
    
        default:
            break;
    }
    return increment;
}

export function calculatePlan(plain){
    if(plain === "1"){
        return 1.20
    } else if(plain === "2"){
        return 1.50
    } else{
       return 1.75
    }

}

export function formatMoney(currency) {
    return currency.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }