class Products {
  constructor(name, price, salePrice, category) {
    this.name = name;
    this.price = price;
    this.salePrice = salePrice;
    this.category = category;
  }
  set category(index) {
    const categories = ["T-shirts", "Pants", "Sweaters", "Shoes"];
    this._category = categories[index];
  }
  showProtuctAndPrice() {
    //pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur")
    return ` ${this.category} ${this.name} Normal price: ${this.price}`;
  }
  checkForDiscount() {
    if (this.price > this.salePrice) {
      return ["This item is on SALE, buy now, just - ", this.salePrice];
    }
    return ["There is no sales for this product", this.price];
  }
  showDiscountSize() {
    if (this.salePrice < this.price) {
      let calc = (100 / this.price) * (this.price - this.salePrice);
      return ` DISCOUNT SIZE <b> ${Math.floor(calc)} % </b>`;
    }
    return "NO DISCOUNT";
  }
}
