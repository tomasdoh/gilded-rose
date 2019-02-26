const NormalItem = require('./normalItems')

class AgedBrie extends NormalItem {

  qualityDegradeRate() {
    return 1;
  }

}

module.exports = AgedBrie
