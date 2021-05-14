var orderData = {
  quantity: 46,
  price: 10.0
};

fetch("http://localhost:8080/create_preference", {
  method: "POST,GET,DELETE,PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(orderData),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (preference) {
    createCheckoutButton(preference.id);
    setTimeout(() => {
      $(".coast").show(500).fadeIn();
    }, 500);
  })
  .catch(function () {
    alert("Unexpected error");
    $("#checkout-btn").attr("disabled", false);
  });

//Create preference when click on checkout button
function createCheckoutButton(preference) {
  var script = document.createElement("script");

  // The source domain must be completed according to the site for which you are integrating.
  // For example: for Argentina ".com.ar" or for Brazil ".com.br".
  script.src ="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
  script.type = "text/javascript";
  script.dataset.preferenceId = preference;
//   document.getElementById("button-checkout").innerHTML = "";
  document.querySelector("#oshi").appendChild(script);
}
