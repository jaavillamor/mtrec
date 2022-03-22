document.addEventListener("blur", callAll);

function callAll() {
  //=====| get wemix credits required |=====//
  var req_draco = parseFloat(document.getElementById('req_draco').value);
  var market_draco = parseFloat(document.getElementById('market_draco').value);
  if (req_draco == "" || market_draco == "") {
    var req_draco = 0.0000;
    var market_draco = 0.0000;
    var req_wemix = 0.0000;
  } else {
    var req_wemix = req_draco * market_draco;
  }
  console.log('req_draco= '.concat(req_draco));
  console.log('market_draco= '.concat(market_draco));
  console.log('req_wemix= '.concat(req_wemix));
  document.getElementById('req_wemix').value = req_wemix.toFixed(4);

  //=====| get php value of wemix required |=====//
  var market_wemix = parseFloat(document.getElementById('market_wemix').value);
  var req_wemix_php = req_wemix * market_wemix;
  console.log('req_wemix_php= '.concat(req_wemix_php));
  document.getElementById('req_wemix_php').value = req_wemix_php.toFixed(2);

  //======| get the sales amount |======//
  var market_hydra = document.getElementById('market_hydra').value;
  if (market_hydra == "" || market_hydra == 0.0000) {
    var sales = 0.0000;
  } else {
    var sales = parseFloat(market_hydra);
  }
  console.log('sales= '.concat(sales));
  document.getElementById('sales').value = sales.toFixed(4);

  //======| get the purchases amount |======//
  if (req_wemix == "" || req_wemix == 0.0000) {
    var purchases_draco = 0.0000;
  } else {
    var purchases_draco = req_wemix;
  }
  console.log('purchases_draco= '.concat(purchases_draco));
  document.getElementById('purchases_draco').value = purchases_draco.toFixed(4);

  //======| get the other fees amount |======//
  var txnfee = sales * 0.0009;
  console.log('txnfee= '.concat(txnfee));
  document.getElementById('txnfee').value = txnfee.toFixed(4);


  //======| get the cost of sales |======//
  var cost_sales = purchases_draco + txnfee;
  console.log('cost_sales= '.concat(cost_sales));
  document.getElementById('cost_sales').value = cost_sales.toFixed(4);


  //======| get the pnl in a single rotation in wemix creds|======//
  var pnl_single_wemix = sales - cost_sales;
  console.log('pnl_single_wemix= '.concat(pnl_single_wemix));
  document.getElementById('pnl_single_wemix').value = pnl_single_wemix.toFixed(4);


  //======| get the pnl in a single rotation in draco |======//
  //======| get the pnl in a single rotation in pesos |======//
  if (market_draco == 0 || market_draco == "") {
    var pnl_single_draco = 0;
    var pnl_single_pesos = 0.00;
  } else {
    var pnl_single_draco = Math.floor(pnl_single_wemix / market_draco);
    var pnl_single_pesos = pnl_single_wemix * market_wemix;
  }
  console.log('market_wemix= '.concat(market_wemix));
  console.log('pnl_single_draco= '.concat(pnl_single_draco));
  console.log('pnl_single_pesos= '.concat(pnl_single_pesos));
  document.getElementById('pnl_single_draco').value = pnl_single_draco.toFixed(0);
  document.getElementById('pnl_single_pesos').value = pnl_single_pesos.toFixed(2);

  //======| get the maximum rotations based on available septaria |======//
  var septaria_available = parseFloat(document.getElementById('septaria_available').value);
  var req_septaria = parseFloat(document.getElementById('req_septaria').value);
  if (septaria_available == "" || req_septaria == "") {
    var rotations = 0;
  } else {
    var rotations = septaria_available / req_septaria;
    var rotations = Math.floor(rotations);
  }
  console.log('rotations= '.concat(rotations));

  //======| get the pnl in a maxed rotation in wemix creds|======//
  if (sales == 0 || cost_sales == 0) {
    var pnl_multi_wemix = 0.0000;
  } else {
    var pnl_multi_wemix = (sales - cost_sales) * rotations;
  }
  console.log('pnl_multi_wemix= '.concat(pnl_multi_wemix));
  document.getElementById('pnl_multi_wemix').value = pnl_multi_wemix.toFixed(4);

  //======| get the pnl in a maxed rotation in draco|======//
  //======| get the pnl in a maxed rotation in pesos|======//
  if (market_draco == 0 || market_draco == "") {
    var pnl_multi_draco = 0;
    var pnl_multi_pesos = 0.00;
  } else {
    var pnl_multi_draco = (pnl_multi_wemix / market_draco);
    var pnl_multi_pesos = (pnl_multi_wemix * market_wemix);
  }
  console.log('pnl_multi_draco= '.concat(pnl_multi_draco));
  document.getElementById('pnl_multi_draco').value = pnl_multi_draco.toFixed(0);
  console.log('pnl_multi_pesos= '.concat(pnl_multi_pesos));
  document.getElementById('pnl_multi_pesos').value = pnl_multi_pesos.toFixed(2);
}