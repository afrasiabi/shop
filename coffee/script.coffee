cart = ko.observableArray([])
goods = ko.observableArray([
  {
    id: 0
    src: "./assets/pics/theree-wheel-low-800x600.jpg"
    title: "Blue Navy"
    price: 35000
    priceDesc: "Item not exist in store"
  }
  {
    id: 1
    src: "./assets/pics/mystery.jpg"
    title: "Van"
    price: 5200
    priceDesc: "Item will be available in march"
  }
  {
    id: 2
    src: "./assets/pics/fiat-03_copy.png"
    title: "Old Car"
    price: 999
    priceDesc: "Price is lower than every online shop"
  }
  {
    id: 3
    src: "./assets/pics/surf_turf.png"
    title: "Water Ski"
    price: 22500
    priceDesc: "Price is discounted until 2nd, Jan"
  }        
  {
    id: 4
    src: "./assets/pics/cuba-sunrise.jpg"
    title: "Pinky Pinky"
    price: 44899
    priceDesc: "Valid through until 28 Dec"
  }
  {
    id: 5
    src: "./assets/pics/carbeaut3.jpg"
    title: "Tiny Car"
    price: 1200
    priceDesc: "Free shipping"
  }
])

totalPrice = ko.observable(0)
selectGood = (good) ->
  for item in cart()
    if item.id is good.id
      return
  cart.push good

  total = 0
  for item in cart()
    total = total + item.price

  totalPrice(total)

showCart = ko.observable(false)
switchShowCart = ->
  showCart(not showCart())

ko.applyBindings {
  goods: goods
  selectGood: selectGood
  cart: cart
  showCart: showCart
  switchShowCart: switchShowCart
  totalPrice: totalPrice
}