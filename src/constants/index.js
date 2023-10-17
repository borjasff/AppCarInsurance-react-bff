export const BRANDS = [
    {id: 1, name: 'European'},
    {id: 2, name: 'American'},
    {id: 3, name: 'Asian'}
];
//TO SPECIFICATION THE YEAR OF THE CAR
const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (value, index) => YEARMAX - index);

export const PLAINS  = [
    {id: 1, name: 'Basic'},
    {id: 2, name: 'Full'},
    {id: 3, name: 'Premium'}
];