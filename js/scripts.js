var getFullName = function(first, middle, last) {
  return first + " " + middle + ". " + last;
};

var getFullAddress = function(address1, address2) {
  return address1 + " " + address2;
};

var cityStateZip = function(city, state, zip) {
  return city + ", " + state + " " + zip;
};

var getFlowerPrice = function(type, amount) {
  var localAmount = amount;
  if (type === "Daisies") {
    return localAmount;
  } else if (type === "Orchids") {
    return 2 * localAmount;
  } else if (type === "Roses") {
    return 4 * localAmount;
  } else if (type === "Tulips") {
    return 3 * localAmount;
  } else {
    console.log("Invalid flower type detected")
    return 0;
  }
};

var getOrderDetails = function(amount, type) {
  return amount.toString() + " " + type;
};

$(document).ready(function() {
  $("#shippingDetails").submit(function(event) {
    var firstName = $("input#firstName").val();
    var middleInitial = $("input#middleInitial").val();
    var lastName = $("input#lastName").val();
    var addressOne = $("input#addressOne").val();
    var addressTwo = $("input#addressTwo").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipCode = $("input#zipCode").val();
    var flowerType = $("#flower").val();
    var flowerNumber = parseInt($("#number").val());

    var fullName = getFullName(firstName, middleInitial, lastName);
    var fullAddress = getFullAddress(addressOne, addressTwo);
    var location = cityStateZip(city, state, zipCode);
    var totalPrice = parseFloat(getFlowerPrice(flowerType, flowerNumber));
    var orderDetails = getOrderDetails(flowerNumber, flowerType);

    $("#fullName").text(fullName);
    $("#fullAddress").text(fullAddress);
    $("#location").text(location);
    $("#order").text(orderDetails);
    $("#cost").text(totalPrice);

    $("#receipt").show();
    $("#shipping").hide();

    event.preventDefault();
  });


});
