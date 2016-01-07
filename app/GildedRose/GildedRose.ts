class Item {
    constructor(name: string, quality: number, sellIn: number) {
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }

    name: string;
    quality: number;
    sellIn: number;
}

class GildedRose {
    static updateQuality(items: Array<Item>): Array<Item> {
        return items.map((item) => {
            return new Item(item.name, Quality.qualityDecay(item), SellIn.sellInDecay(item))
        })
    }
}

class SellIn {
    private static _sellInDecay(sellIn: number): number {
        var decaySpeed = 1;
        return (sellIn - decaySpeed) < 0 ? 0 : sellIn - decaySpeed;
    }

    static sellInDecay(item: Item): number {
        if (item.name === "Sulfuras") {
            return item.sellIn
        } else {
            return SellIn._sellInDecay(item.sellIn)
        }
    }
 }

class Quality {
    private static _normalizeQuality(quality: number): number {
        if (quality >= 0 && quality <= 50) {
            return quality;
        } else if (quality < 0) {
            return 0;
        } else if (quality > 50) {
            return 50;
        }
    }

    static normalQualityDecay(item: Item): number {
        if (item.sellIn > 0) {
            return item.quality - 1;
        } else {
            return item.quality - 2;
        }

    }

    static agedBrieQualityDecay(quality: number): number {
        return quality + 1;
    }

    static sulfurasQualityDecay(quality: number): number {
        return quality;
    }

    static backstagePassQualityDecay(item: Item): number {
        if (item.sellIn <= 10 && item.sellIn > 5) {
            return item.quality + 2;
        } else if (item.sellIn <= 10 && item.sellIn <= 5 && item.sellIn > 0) {
            return item.quality + 3;
        } else if (item.sellIn <= 0) {
            return 0;
        } else {
            return item.quality;
        }
    }

    static conjuredQualityDecay(item: Item): number {
        if (item.sellIn > 0) {
            return item.quality - 2;
        } else {
            return item.quality - 4
        }
    }

    static qualityDecay(item: Item): number {
         if (item.name === "Aged Brie") {
            return Quality._normalizeQuality(Quality.agedBrieQualityDecay(item.quality));
        } else if (item.name === "Sulfuras") {
            return Quality.sulfurasQualityDecay(item.quality)
        } else if (item.name === "Back Stage Pass") {
             return Quality._normalizeQuality(Quality.backstagePassQualityDecay(item));
         } else if (item.name === "Conjured") {
             return Quality._normalizeQuality(Quality.conjuredQualityDecay(item));
         } else {
            return Quality._normalizeQuality(Quality.normalQualityDecay(item));
         }
    }
}

export default {Item, GildedRose}