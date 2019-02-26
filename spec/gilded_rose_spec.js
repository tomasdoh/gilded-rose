const Shop = require('../src/shop.js');
const Item = require('../src/item.js');
describe("Gilded Rose -", () => {

  describe("Normal items:", () => {
    it("quality and sell-in date should lower by one", () => {
      const shop = new Shop([ new Item("cheese", 10, 10) ]);
      const items = shop.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

    it("an item's quality can't be negative", () => {
      const shop = new Shop([ new Item("cheese", 0, 0) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).not.toEqual(-1);
    });

    it("an item's quality can't exceed 50", () => {
      const shop = new Shop([ new Item("cheese", 100, 50) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(49);
    });
  });

  describe("Conjured items:", () => {
    it("degrades twice as fast as normal items", () => {
      const shop = new Shop([ new Item("conjured cheese", 10, 10), new Item("conjured Aged Brie", 10, 10)]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(8);
      expect(items[1].quality).toEqual(12);
    })
  })

  describe("Edge cases:", () => {
    it("if sell-in date passes, the quality degrades twice as fast", () => {
      const shop = new Shop([ new Item("cheese", -1, 20) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(18);
    });

    it("'Aged Brie' increases in value the older it gets", () => {
      const shop = new Shop([ new Item("Aged Brie", 5, 20) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(21);
    });

    it("'Sulfuras' always maintains the same quality", () => {
      const shop = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 80) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(80);
    });

    it("'Backstage passes' quality increases by 2 when 6-10 days before sell-in", () => {
      const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 10) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it("'Backstage passes' quality increases by 3 when 1-5 days before sell-in", () => {
      const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it("'Backstage passes' quality drops to 0 when concert is over", () => {
      const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
      const items = shop.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });
});
