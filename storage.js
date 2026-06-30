const STOCK_KEY = "mt_stock";
const HISTORY_KEY = "mt_history";

function getStock(){
  return JSON.parse(localStorage.getItem(STOCK_KEY) || "{}");
}

function saveStock(data){
  localStorage.setItem(STOCK_KEY,JSON.stringify(data));
}

function getHistory(){
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
}

function saveHistory(data){
  localStorage.setItem(HISTORY_KEY,JSON.stringify(data));
}
