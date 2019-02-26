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
      this.item.quality += (this.qualityDegradeRate() - 1)
    } else if (this.canDegrade() && this.isConjured()) {
      this.item.quality += (this.qualityDegradeRate() * 2)
    } else if (this.canDegrade()) {
      this.item.quality += this.qualityDegradeRate()
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

  qualityDegradeRate() {
    return -1
  }

  isConjured() {
    return this.item.name.includes('conjured');
  }

}

 module.exports = NormalItems;
