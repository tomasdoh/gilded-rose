const { Shop, Item } = require('../src/gilded_rose.js');
describe("Gilded Rose", () => {

  describe("No edge cases", () => {
    it("quality and sell date should lower by one", () => {
      const gildedRose = new Shop([ new Item("cheese", 10, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });
  });
});
