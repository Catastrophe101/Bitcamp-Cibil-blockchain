/*globals $, SimpleStorage, document*/

var addToLog = function(id, txt) {
  $(id + " .logs").append("<br>" + txt);
};

// ===========================
// Blockchain example
// ===========================
$(document).ready(function() {

  $("#setpan.set").click(function() {
    var value = parseInt($("#pid.text").val(), 10);
	var value2=	 parseInt($("#cid.text").val(), 10);
    // If web3.js 1.0 is being used
    if (EmbarkJS.isNewWeb3()) {
      SimpleStorage.methods.set(value,value2).send({from: web3.eth.defaultAccount});
      addToLog("#blockchain", "SimpleStorage.methods.set(value).send({from: web3.eth.defaultAccount})");
    } else {
      SimpleStorage.set(value);
      addToLog("#blockchain", "SimpleStorage.set(" + value + ")");
    }
  });

  $("#get.get").click(function() {
    // If web3.js 1.0 is being used
    if (EmbarkJS.isNewWeb3()) {
      SimpleStorage.methods.get().call(function(err, value) {
        $("#blockchain .value").html(value);
      });
      addToLog("#blockchain", "SimpleStorage.methods.get(console.log)");
    } else {
      SimpleStorage.get(10).then(function(value) {
        $("#blockchain .value").html(value.toNumber());
      });
      addToLog("#blockchain", "SimpleStorage.get()");
    }
  });
$("#blockchain button.loan").click(function() {
    // If web3.js 1.0 is being used
    if (EmbarkJS.isNewWeb3()) {
      SimpleStorage.methods.loan().call(function(err, value) {
        $("#blockchain .value").html(value);
      });
      addToLog("#blockchain", "SimpleStorage.methods.loan(console.log)");
    } else {
      SimpleStorage.loan().then(function(value) {
        $("#blockchain .value2").html(value.toNumber());
      });
      addToLog("#blockchain", "SimpleStorage.loan()");
    }
	if (EmbarkJS.isNewWeb3()) {
      SimpleStorage.methods.payback().call(function(err, value) {
        $("#blockchain .value").html(value);
      });
      addToLog("#blockchain", "SimpleStorage.methods.loan(console.log)");
    } else {
      SimpleStorage.payback().then(function(value) {
        $("#blockchain .value2").html(value.toNumber());
      });
      addToLog("#blockchain", "SimpleStorage.payback()");
    }
  });
});