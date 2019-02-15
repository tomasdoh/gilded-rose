const { Shop, Item } = require('../src/gilded_rose.js');
describe("Gilded Rose -", () => {

  describe("Normal items:", () => {
    it("quality and sell-in date should lower by one", () => {
      const gildedRose = new Shop([ new Item("cheese", 10, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

    it("the quality of an item can't be negative", () => {
      const gildedRose = new Shop([ new Item("cheese", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).not.toEqual(-1);
    })
  });
});
