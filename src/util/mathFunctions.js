function getTotalUnpaidBills(bills) {
    return bills
        .filter((bill) => bill.status ==="Not Paid")
        .map(bill => bill.amount)
        .reduce((a,b) => a +b,0)

}
function getTotalPaidBills(bills) {
    return bills
        .filter((bill) => bill.status ==="Paid")
        .map(bill => bill.amount)
        .reduce((a,b) => a +b,0)

}
function getTotalHouses(houses) {
    console.log("sjsjsjs",houses)
    return houses.reduce((a,b) => a +b,0)

}
function getTotalNumberofTenants(tenants){
    return tenants.reduce((a,b) => a +b,0)
}
export {getTotalUnpaidBills, getTotalPaidBills,getTotalNumberofTenants,getTotalHouses}
