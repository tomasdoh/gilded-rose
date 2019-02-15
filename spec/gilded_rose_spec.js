const { Shop, Item } = require('../src/gilded_rose.js');
describe("Gilded Rose - ", () => {

  describe("Normal items: ", () => {
    it("quality and sell-in date should lower by one", () => {
      const gildedRose = new Shop([ new Item("cheese", 10, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

    it("an item's quality can't be negative", () => {
      const gildedRose = new Shop([ new Item("cheese", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).not.toEqual(-1);
    });

    it("an item's quality can't exceed 50", () => {
      const gildedRose = new Shop([ new Item("cheese", 100, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(49);
    });

  describe("Edge cases: ", () => {
    it("if sell-in date passes, the quality degrades twice as fast", () => {
      const gildedRose = new Shop([ new Item("cheese", -1, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(18);
    });


  });

  });
});
