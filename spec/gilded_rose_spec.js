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

<<<<<<< HEAD
    describe("Edge cases: ", () => {
      it("if sell-in date passes, the quality degrades twice as fast", () => {
        const gildedRose = new Shop([ new Item("cheese", -1, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(18);
      });
=======
  describe("Edge cases: ", () => {
    it("if sell-in date passes, the quality degrades twice as fast", () => {
      const gildedRose = new Shop([ new Item("cheese", -1, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(18);
    })
  })
>>>>>>> 84294a64824ed1c5df0a3b0e135c9e79a908ec29

      it("'Aged Brie' increases in value the older it gets", () => {
        const gildedRose = new Shop([ new Item("Aged Brie", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(21);
      });
    });
  });
});
