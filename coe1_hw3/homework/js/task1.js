let principal = prompt("Initial amount:");
let year = prompt("Number of years:");
let rate = prompt("Percentage of year:");

if (principal === null || principal === "" || isNaN(parseInt(principal))|| principal < 1000  || year === null || year === ""  || isNaN(parseInt(year))|| year <1|| rate === null || rate === ""|| isNaN(parseInt(rate))||rate >100) 
{
alert("Invalid input data");
}

else 
{
    profit = (rate / 100) * principal;
    amount = 1*profit + 1*principal; 

for(let i=1;i<=year;i++)
{

document.write(i+" year");
document.write("<br>");
document.write("Total profit: " + profit);
document.write("<br>");
document.write("Total amount: " + amount);
document.write("<br><br><br>");
profit=profit+((rate / 100) *amount);
amount=1*profit+1*principal;
}
}