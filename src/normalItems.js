class NormalItems {
  constructor(item) {
    this.item = item;

    this.MAX_QUALITY = 50;
    this.MIN_QUALITY = 0;
  }

  degrade() {
    this.qualityReduce()
    this.sellInReduce()
  }

  qualityReduce() {
    if (this.canDegrade() && this.pastSellIn()) {
      this.item.quality -= 2
    } else if (this.canDegrade()) {
      this.item.quality -= 1
    }
  }

  sellInReduce() {
    this.item.sellIn -= 1
  }

  pastSellIn() {
    if (this.item.sellIn <= 0) {
      return true
    }
  }

  canDegrade() {
    if (this.item.quality <= this.MAX_QUALITY
      && this.item.quality >= this.MIN_QUALITY) {
        return true
    }
  }

};

 module.exports = NormalItems;
