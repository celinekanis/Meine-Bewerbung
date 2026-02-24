

let invoices =
JSON.parse(localStorage.getItem("invoices"))
|| [];

function save(){

localStorage.setItem(
"invoices",
JSON.stringify(invoices)
);

}

function addInvoice(){

let customer =
document.getElementById("customer").value;

let net =
parseFloat(document.getElementById("net").value);

let vat =
net * 0.19;

let gross =
net + vat;

let invoice = {

customer,
net,
vat,
gross

};

invoices.push(invoice);

save();

render();

}

function deleteInvoice(index){

invoices.splice(index,1);

save();

render();

}

function render(){

let list =
document.getElementById("list");

list.innerHTML="";

invoices.forEach((inv,index)=>{

list.innerHTML += `

<tr>

<td>${inv.customer}</td>

<td>${inv.net.toFixed(2)} €</td>

<td>${inv.vat.toFixed(2)} €</td>

<td>${inv.gross.toFixed(2)} €</td>

<td>

<button class="delete"
onclick="deleteInvoice(${index})">

X

</button>

</td>

</tr>

`;

});

}

render();

