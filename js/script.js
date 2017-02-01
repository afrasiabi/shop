var cart, goods, selectGood, showCart, switchShowCart, totalPrice;

cart = ko.observableArray([]);

goods = ko.observableArray([
  {
    id: 0,
    src: "./assets/pics/theree-wheel-low-800x600.jpg",
    title: "Blue Navy",
    price: 35000,
    priceDesc: "Item not exist in store"
  }, {
    id: 1,
    src: "./assets/pics/mystery.jpg",
    title: "Van",
    price: 5200,
    priceDesc: "Item will be available in march"
  }, {
    id: 2,
    src: "./assets/pics/fiat-03_copy.png",
    title: "Old Car",
    price: 999,
    priceDesc: "Price is lower than every online shop"
  }, {
    id: 3,
    src: "./assets/pics/surf_turf.png",
    title: "Water Ski",
    price: 22500,
    priceDesc: "Price is discounted until 2nd, Jan"
  }, {
    id: 4,
    src: "./assets/pics/cuba-sunrise.jpg",
    title: "Pinky Pinky",
    price: 44899,
    priceDesc: "Valid through until 28 Dec"
  }, {
    id: 5,
    src: "./assets/pics/carbeaut3.jpg",
    title: "Tiny Car",
    price: 1200,
    priceDesc: "Free shipping"
  }
]);

totalPrice = ko.observable(0);

selectGood = function(good) {
  var i, item, j, len, len1, ref, ref1, total;
  ref = cart();
  for (i = 0, len = ref.length; i < len; i++) {
    item = ref[i];
    if (item.id === good.id) {
      return;
    }
  }
  cart.push(good);
  total = 0;
  ref1 = cart();
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    item = ref1[j];
    total = total + item.price;
  }
  return totalPrice(total);
};

showCart = ko.observable(false);

switchShowCart = function() {
  return showCart(!showCart());
};

ko.applyBindings({
  goods: goods,
  selectGood: selectGood,
  cart: cart,
  showCart: showCart,
  switchShowCart: switchShowCart,
  totalPrice: totalPrice
});
