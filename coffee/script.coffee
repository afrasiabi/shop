goods = [
  {
    id: 0
    src: "./assets/pics/theree-wheel-low-800x600.jpg"
    title: "BmwX3"
    price: "415000000"
    priceDesc: "Item not exist in store"
  }
  {
    id: 1
    src: "./assets/pics/mystery.jpg"
    title: "BmwX3"
    price: "415000000"
    priceDesc: "Item not exist in store"
  }
  {
    id: 2
    src: "./assets/pics/bodyLotion.jpg"
    title: "bodyLotion"
    price: "35000"
    priceDesc: "Price is lower than every online shop"
  }
  {
    id: 3
    src: "./assets/pics/coffeeMaker.JPG"
    title: "coffeeMaker"
    price: "400000"
    priceDesc: "Price is discounted until 2nd, Jan"
  }
  {
    id: 4
    src: "./assets/pics/handToolBox.jpg"
    title: "handToolBox"
    price: "260000"
    priceDesc: "Valid through until 28 Dec"
  }
  {
    id: 5
    src: "./assets/pics/iphone7.jpg"
    title: "iphone7"
    price: "3150000"
    priceDesc: "Free shipping"
  }
]

class GoodManager
  constructor: (node, countElement) ->
    @node = node
    @countElement = countElement
    @cart = []

  addGood: (goodInfo) ->
    goodElement = @_makeGoodElement(goodInfo)
    @_setGoodEvents(goodElement, goodInfo)
    @node.appendChild(goodElement)

  _makeGoodElement: (goodInfo) ->
    goodInnerHTML = """
      <div class="goodImageHolder">
        <img src="#{goodInfo.src}" alt="#{goodInfo.title}">
      </div>
      <div class="titleBar">
        <div class="title">#{goodInfo.title.toLowerCase()}</div>
      </div>
      <div class="priceBar">
        <div class="price">#{goodInfo.price}</div>
        <div class="price-desc">#{goodInfo.priceDesc}</div>
        <div class="add-to-cart">Add To Cart</div>
      </div>
    """

    goodContainerElement = document.createElement "div"
    goodContainerElement.classList.add "goodContainer"
    goodContainerElement.innerHTML = goodInnerHTML
    return goodContainerElement

  _setGoodEvents: (goodElement, goodInfo) ->
    cart = @cart
    countElement = @countElement
    goodElement.querySelector(".add-to-cart").addEventListener "click", (event) ->
      @style.backgroundColor = "gray"

      for item in cart
        if item.id is goodInfo.id
          return

      cart.push goodInfo
      countElement.innerText = cart.length
      console.log cart


goodHolderElement = document.getElementById("goodHolder")
countElement = document.getElementById("count")
goodManager = new GoodManager goodHolderElement, countElement
for good, index in goods
  goodManager.addGood good