export class ImageLibrary{
    public images :any;

    constructor(){
        this.images = [
            //bodycare
            {image : 'DSC_2446.jpg', category: 'product', subcategory: 'bodycare', size: 'square'},
            {image : 'DSC_2463.jpg', category: 'product', subcategory: 'bodycare', size: 'square'},
            {image : 'gameon.jpg', category: 'product', subcategory: 'bodycare', size: 'tall'},
            {image : 'DSC_2526.jpg', category: 'product', subcategory: 'bodycare', size: 'wide'},
            {image : 'DSC_2643.jpg', category: 'product', subcategory: 'bodycare', size: 'fat'},
            {image : 'DSC_2649.jpg', category: 'product', subcategory: 'bodycare', size: 'medium'},
            {image : 'DSC_5632.jpg', category: 'product', subcategory: 'bodycare', size: 'medium-2'},
            //sunglass
            {image : 'DSC_0545.jpg', category: 'product', subcategory: 'sunglass', size: 'square'},
            {image : 'DSC_2045-1.jpg', category: 'product', subcategory: 'sunglass', size: 'square'},
            {image : 'DSC_0123.jpg', category: 'product', subcategory: 'sunglass', size: 'tall'},
            {image : 'ET17874.jpg', category: 'product', subcategory: 'sunglass', size: 'wide'},
            {image : 'DSC_2045-1.jpg', category: 'product', subcategory: 'sunglass', size: 'fat'},
            {image : 'EL-14856-54.jpg', category: 'product', subcategory: 'sunglass', size: 'medium'},
            {image : 'DSC_0044.jpg', category: 'product', subcategory: 'sunglass', size: 'medium-2'},
            //bottle
            {image : 'Dew.jpg', category: 'product', subcategory: 'bottle', size: 'square'},
            {image : 'cocacola-water.jpg', category: 'product', subcategory: 'bottle', size: 'square'},
            {image : 'grape-juice.jpg', category: 'product', subcategory: 'bottle', size: 'tall'},
            {image : 'monster.jpg', category: 'product', subcategory: 'bottle', size: 'wide'},
            {image : 'Hollander_n.jpg', category: 'product', subcategory: 'bottle', size: 'fat'},
            {image : 'monste1r.jpg', category: 'product', subcategory: 'bottle', size: 'medium'},
            {image : 'DSC_1784-1.jpg', category: 'product', subcategory: 'bottle', size: 'medium-2'},
            //food
            {image : 'DSC_3099-1.jpg', category: 'product', subcategory: 'food', size: 'square'},
            {image : 'DSC_9608.jpg', category: 'product', subcategory: 'food', size: 'square'},
            {image : 'burger-on-air.jpg', category: 'product', subcategory: 'food', size: 'tall'},
            {image : 'DSC_3160-1.jpg', category: 'product', subcategory: 'food', size: 'wide'},
            {image : 'pingles_red.jpg', category: 'product', subcategory: 'food', size: 'fat'},
            {image : 'DSC_9604.jpg', category: 'product', subcategory: 'food', size: 'medium'},
            {image : 'DSC_9749.jpg', category: 'product', subcategory: 'food', size: 'medium-2'},
            //watch
            {image : 'DSC_5326.jpg', category: 'product', subcategory: 'watch', size: 'square'},
            {image : 'DSC_5330.jpg', category: 'product', subcategory: 'watch', size: 'square'},
            {image : 'light-paint.jpg', category: 'product', subcategory: 'watch', size: 'tall'},
            {image : 'fossil-red.jpg', category: 'product', subcategory: 'watch', size: 'wide'},
            {image : 'Watch.jpg', category: 'product', subcategory: 'watch', size: 'fat'},
            {image : 'DSC_5412.jpg', category: 'product', subcategory: 'watch', size: 'medium'},
            {image : 'DSC_5314.jpg', category: 'product', subcategory: 'watch', size: 'medium-2'},
            //shoe
            {image : 'DSC_6281.jpg', category: 'product', subcategory: 'shoe', size: 'square'},
            {image : 'DSC_6315n.jpg', category: 'product', subcategory: 'shoe', size: 'square'},
            {image : 'DSC_4387.jpg', category: 'product', subcategory: 'shoe', size: 'tall'},
            {image : '3.jpg', category: 'product', subcategory: 'shoe', size: 'wide'},
            {image : 'DSC_6281white.jpg', category: 'product', subcategory: 'shoe', size: 'fat'},
            {image : 'DSC_4437.jpg', category: 'product', subcategory: 'shoe', size: 'medium'},
            {image : 'DSC_6878.jpg', category: 'product', subcategory: 'shoe', size: 'medium-2'},
            //perfume
            {image : 'body-spray-purple.jpg', category: 'product', subcategory: 'perfume', size: 'square'},
            {image : 'DSC_2521.jpg', category: 'product', subcategory: 'perfume', size: 'square'},
            {image : 'Body-spray.jpg', category: 'product', subcategory: 'perfume', size: 'tall'},
            {image : 'game-on-banner.jpg', category: 'product', subcategory: 'perfume', size: 'wide'},
            {image : 'pure-black.jpg', category: 'product', subcategory: 'perfume', size: 'fat'},
            {image : 'DSC_2494.jpg', category: 'product', subcategory: 'perfume', size: 'medium'},
            {image : 'ATOR.jpg', category: 'product', subcategory: 'perfume', size: 'medium-2'},
            //random
            {image : 'camera.jpg', category: 'product', subcategory: 'random', size: 'square'},
            {image : 'ring.jpg', category: 'product', subcategory: 'random', size: 'square'},
            {image : 'lense.jpg', category: 'product', subcategory: 'random', size: 'tall'},
            {image : 'mac.jpg', category: 'product', subcategory: 'random', size: 'wide'},
            {image : 'cloud.jpg', category: 'product', subcategory: 'random', size: 'fat'},
            {image : 'need-me.jpg', category: 'product', subcategory: 'random', size: 'medium'},
            {image : 'car.jpg', category: 'product', subcategory: 'random', size: 'medium-2'},
        ];
    }

    public getImages(cat, subcat) : any{
      console.log('came');
      return this.images.filter( x=> x.category == cat && x.subcategory == subcat);
    }
}
