let billItems = [];

function showPage(page){

  document.querySelectorAll(".page")
    .forEach(p=>p.classList.add("hidden"));

  document.getElementById(page + "Page")
    .classList.remove("hidden");
}

function showToast(message){

  const toast =
    document.getElementById("toast");

  toast.innerText = message;

  toast.style.display = "block";

  setTimeout(()=>{
    toast.style.display = "none";
  },2000);
}

function addStock(){

  const code =
    document.getElementById("stockCode")
      .value.toUpperCase();

  const qty =
    parseInt(
      document.getElementById("stockQty").value
    );

  const stock = getStock();

  stock[code] = (stock[code] || 0) + qty;

  saveStock(stock);

  renderStock();

  showToast("Stock Added");
}

function renderStock(){

  const stock = getStock();

  const table =
    document.getElementById("stockTable");

  table.innerHTML = "";

  Object.keys(stock).forEach(code=>{

    table.innerHTML += `
      <tr>
        <td>${code}</td>
        <td>${stock[code]}</td>
      </tr>
    `;
  });

  let total = 0;

  Object.values(stock).forEach(q=>{
    total += q;
  });

  document.getElementById("totalStock")
    .innerText = total;
}

function addBillItem(){

  const code =
    document.getElementById("billCode")
      .value.toUpperCase();

  const qty =
    parseInt(
      document.getElementById("billQty").value
    );

  const rate =
    parseFloat(
      document.getElementById("billRate").value
    );

  const total = qty * rate;

  billItems.push({
    code,
    qty,
    rate,
    total
  });

  renderBillItems();
}

function renderBillItems(){

  const table =
    document.getElementById("billTable");

  table.innerHTML = "";

  billItems.forEach(item=>{

    table.innerHTML += `
      <tr>
        <td>${item.code}</td>
        <td>${item.qty}</td>
        <td>${item.rate}</td>
        <td>${item.total}</td>
      </tr>
    `;
  });
}

function generateBill(){

  const history = getHistory();

  history.push({
    items:billItems,
    total:billItems.reduce((a,b)=>a+b.total,0)
  });

  saveHistory(history);

  showToast("Invoice Generated");

  billItems = [];

  renderBillItems();

  let sales = 0;

  history.forEach(h=>{
    sales += h.total;
  });

  document.getElementById("totalSales")
    .innerText = "₹" + sales;
}

window.addEventListener("load",()=>{

  renderStock();

  setTimeout(()=>{

    document.getElementById("splashScreen")
      .style.display = "none";

  },1500);
});
