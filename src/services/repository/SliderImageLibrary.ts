export class SliderImageLibrary{
    public images :any;

    constructor(){
        this.images = [
            //bodycare
            {image : 'DSC_9458.jpg', category: 'product', subcategory: 'bodycare'},
            {image : 'DSC_5632.jpg', category: 'product', subcategory: 'bodycare'},
            {image : 'DSC_2463.jpg', category: 'product', subcategory: 'bodycare'},
            //sunglass
            {image : 'DSC_0094.jpg', category: 'product', subcategory: 'sunglass'},
            {image : 'DSC_4749.jpg', category: 'product', subcategory: 'sunglass'},
            {image : 'DSC_4786.jpg', category: 'product', subcategory: 'sunglass'},
            {image : 'DSC_1523-1.jpg', category: 'product', subcategory: 'sunglass'},
            //bottle
            {image : 'DSC_2447-1_1.jpg', category: 'product', subcategory: 'bottle'},
            {image : 'Hollander_n.jpg', category: 'product', subcategory: 'bottle'},
            {image : 'pepsi.jpg', category: 'product', subcategory: 'bottle'},
            {image : 'Sprite.jpg', category: 'product', subcategory: 'bottle'},
            //food
            {image : 'DSC_3144-1.jpg', category: 'product', subcategory: 'food'},
            {image : 'DSC_3141-1.jpg', category: 'product', subcategory: 'food'},
            {image : 'DSC_9749.jpg', category: 'product', subcategory: 'food'},
            {image : 'DSC_9777.jpg', category: 'product', subcategory: 'food'},
            //watch
            {image : 'DSC_5269.jpg', category: 'product', subcategory: 'watch'},
            {image : 'DSC_5260.jpg', category: 'product', subcategory: 'watch'},
            {image : 'DSC_6860.jpg', category: 'product', subcategory: 'watch'},
            {image : 'gold-watch-man.jpg', category: 'product', subcategory: 'watch'},
            //shoe
            {image : 'cover.jpg', category: 'product', subcategory: 'shoe'},
            {image : 'DSC_4364.jpg', category: 'product', subcategory: 'shoe'},
            {image : 'Shoe.jpg', category: 'product', subcategory: 'shoe'},
            {image : '2.jpg', category: 'product', subcategory: 'shoe'},
            //perfume
            {image : 'perfume-in-water.jpg', category: 'product', subcategory: 'perfume'},
            {image : 'ATOR.jpg', category: 'product', subcategory: 'perfume'},
            {image : 'game-on-banner.jpg', category: 'product', subcategory: 'perfume'},
            {image : 'Body-spray.jpg', category: 'product', subcategory: 'perfume'},
            //random
            {image : 'cloud.jpg', category: 'product', subcategory: 'random'},
            {image : 'Headphone.jpg', category: 'product', subcategory: 'random'},
            {image : 'Havit-headphone.jpg', category: 'product', subcategory: 'random'},
            {image : 'Cleaner.jpg', category: 'product', subcategory: 'random'},
        ];
    }

    public getImages(cat, subcat) : any{
      console.log('came');
      return this.images.filter( x=> x.category == cat && x.subcategory == subcat);
    }
}
