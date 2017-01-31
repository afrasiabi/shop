var GoodManager, countElement, good, goodHolderElement, goodManager, goods, i, index, len;

goods = [
  {
    id: 0,
    src: "./assets/pics/theree-wheel-low-800x600.jpg",
    title: "BmwX3",
    price: "415000000",
    priceDesc: "Item not exist in store"
  }, {
    id: 1,
    src: "./assets/pics/mystery.jpg",
    title: "BmwX3",
    price: "415000000",
    priceDesc: "Item not exist in store"
  }, {
    id: 2,
    src: "./assets/pics/bodyLotion.jpg",
    title: "bodyLotion",
    price: "35000",
    priceDesc: "Price is lower than every online shop"
  }, {
    id: 3,
    src: "./assets/pics/coffeeMaker.JPG",
    title: "coffeeMaker",
    price: "400000",
    priceDesc: "Price is discounted until 2nd, Jan"
  }, {
    id: 4,
    src: "./assets/pics/handToolBox.jpg",
    title: "handToolBox",
    price: "260000",
    priceDesc: "Valid through until 28 Dec"
  }, {
    id: 5,
    src: "./assets/pics/iphone7.jpg",
    title: "iphone7",
    price: "3150000",
    priceDesc: "Free shipping"
  }
];

GoodManager = (function() {
  function GoodManager(node, countElement) {
    this.node = node;
    this.countElement = countElement;
    this.cart = [];
    this.goods_page = document.getElementById("goods-page");
    this.cart_page = document.getElementById("cart-page");
    this._basketClickEvent();
    this.viewModel = {
      shouldShowPage: ko.observable("goods")
    };
    ko.applyBindings(this.viewModel);
  }

  GoodManager.prototype.addGood = function(goodInfo) {
    var goodElement;
    goodElement = this._makeGoodElement(goodInfo);
    this._setGoodEvents(goodElement, goodInfo);
    return this.node.appendChild(goodElement);
  };

  GoodManager.prototype._makeGoodElement = function(goodInfo) {
    var goodContainerElement, goodInnerHTML;
    goodInnerHTML = "<div class=\"goodImageHolder\">\n  <img src=\"" + goodInfo.src + "\" alt=\"" + goodInfo.title + "\">\n</div>\n<div class=\"titleBar\">\n  <div class=\"title\">" + (goodInfo.title.toLowerCase()) + "</div>\n</div>\n<div class=\"priceBar\">\n  <div class=\"price\">" + goodInfo.price + "</div>\n  <div class=\"price-desc\">" + goodInfo.priceDesc + "</div>\n  <div class=\"add-to-cart\">Add To Cart</div>\n</div>";
    goodContainerElement = document.createElement("div");
    goodContainerElement.classList.add("goodContainer");
    goodContainerElement.innerHTML = goodInnerHTML;
    return goodContainerElement;
  };

  GoodManager.prototype._setGoodEvents = function(goodElement, goodInfo) {
    var cart, countElement;
    cart = this.cart;
    countElement = this.countElement;
    return goodElement.querySelector(".add-to-cart").addEventListener("click", function(event) {
      var i, item, len;
      this.style.backgroundColor = "gray";
      for (i = 0, len = cart.length; i < len; i++) {
        item = cart[i];
        if (item.id === goodInfo.id) {
          return;
        }
      }
      cart.push(goodInfo);
      countElement.innerText = cart.length;
      return console.log(cart);
    });
  };

  GoodManager.prototype._basketClickEvent = function() {
    var basketIcon;
    basketIcon = document.getElementById("shBasket");
    return basketIcon.addEventListener("click", (function(_this) {
      return function(event) {
        var cartContainerElement, cartHolderElement, cartInnerHTML, i, item, len, ref, results;
        _this.viewModel.shouldShowPage("cart");
        cartHolderElement = document.getElementById("cartHolder");
        cartHolderElement.innerHTML = "";
        ref = _this.cart;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          cartInnerHTML = "<div class=\"cart-titleBar\">\n  <div class=\"cart-title\">" + (item.title.toLowerCase()) + "</div>\n</div>\n<div class=\"cart-priceBar\">\n  <div class=\"cart-price\">" + item.price + "</div>\n</div>";
          cartContainerElement = document.createElement("div");
          cartContainerElement.classList.add("cartContainer");
          cartContainerElement.innerHTML = cartInnerHTML;
          results.push(cartHolderElement.appendChild(cartContainerElement));
        }
        return results;
      };
    })(this));
  };

  return GoodManager;

})();

goodHolderElement = document.getElementById("goodHolder");

countElement = document.getElementById("count");

goodManager = new GoodManager(goodHolderElement, countElement);

for (index = i = 0, len = goods.length; i < len; index = ++i) {
  good = goods[index];
  goodManager.addGood(good);
}
