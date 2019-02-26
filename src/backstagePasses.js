const NormalItem = require('./normalItems')

class BackstagePasses extends NormalItem {

  qualityDegradeRate() {
    if (this.item.sellIn >= 6 && this.item.sellIn <= 10) {
      return 2;
    } else if (this.item.sellIn >= 1 && this.item.sellIn <= 5) {
      return 3;
    } else {
      return 1;
    }
  }

  isConcertOver() {
    if (this.item.sellIn <= 0) {
      this.item.quality = 0;
      return;
    }
  }

  degrade() {
    this.isConcertOver();
    this.qualityReduce();
    this.sellInReduce();
  }

}

module.exports = BackstagePasses
