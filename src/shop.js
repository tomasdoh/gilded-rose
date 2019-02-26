const NormalItems = require('./normalItems');
const AgedBrie = require('./agedBrie');
const BackstagePasses = require('./backstagePasses')
const Sulfuras = require('./sulfuras');

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name.includes('Aged Brie')) {
        return new AgedBrie(item).degrade()
      } else if (item.name.includes('Backstage passes to a TAFKAL80ETC concert')) {
        return new BackstagePasses(item).degrade()
      } else if (item.name.includes('Sulfuras, Hand of Ragnaros')) {
        return new Sulfuras(item).degrade()
      } else {
        return new NormalItems(item).degrade()
      }
    })

    return this.items;
  }
}
module.exports = Shop;
