import { Injectable } from "@angular/core";
import { Product } from "../models/Product";

@Injectable({
    providedIn:'root'
})
export class ProductsService {
    constructor() { }

    allCategories = [
        "Sympathy",
        "Anniversary",
        "Congratulations",
        "Get-well"
    ]

    allProducts: Product[] = [
        new Product(
            1,
            '/assets/category/sympathy/product1.PNG',
            'Beautiful Spirit Basket',
            105,
            'Sympathy',
            'Let them know how much you care with a gorgeous bouquet that features carnations, stock, roses, lilies and Fuji mums. Each bloom is a thoughtful reminder of your support and love, while sitting in a beautifully crafted basket.'
        ),
        new Product(
            2,
            '/assets/category/sympathy/product2.PNG',
            'The Spathiphyllum Plant',
            80,
            'Sympathy',
            'Everyone could use a little peace in their life! Commonly known as the peace lily, our spathiphyllum plant is a favorite among just about everyone and perfect for every occasion. This beautiful plant is long–lasting and has an amazing effect on any room with its lush leaves and white flowers.'
        ),
        new Product(
            3,
            '/assets/category/sympathy/product3.PNG',
            'Comfort Planter',
            66,
            'Sympathy',
            'The Comfort Planter offers unspoken words of hope and peace during this time of loss and sadness. Our stylish and sophisticated white ceramic planter holds an elegant 6\" peace lily plant, which exhibits brilliant white tear-shaped blooms amongst dark green foliage for a simply beautiful effect.'
        ),
        new Product(
            4,
            '/assets/category/sympathy/product4.PNG',
            'Eternal Friendship Bouquet',
            100,
            'Sympathy',
            'An exuberance of bright and beautiful white blossoms provides an exquisite way to deliver your expressions of sympathy and comfort. This life affirming tribute combines white roses, snapdragons and Asiatic lilies accented by lush greens arranged in a clear glass 8\" vase. An excellent choice for a wake, funeral service or for sending your condolences to the home of grieving family or friends.'
        ),
        new Product(
            5,
            '/assets/category/sympathy/product5.PNG',
            'Long Stem Pink Rose Bouquet',
            200,
            'Sympathy',
            'Enjoy the classic beauty of the rose with a playful twist in our Long Stem Pink Rose Bouquet. This arrangement features all pink roses that will look especially pretty in the hands of those you cherish most.'
        ),
        new Product(
            6,
            '/assets/category/sympathy/product6.PNG',
            'Clear Skies Bouquet',
            135,
            'Sympathy',
            'Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.'
        ),
        new Product(
            7,
            '/assets/category/sympathy/product7.PNG',
            'Beyond Blue Bouquet',
            92,
            'Sympathy',
            'There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.'
        ),
        new Product(
            8,
            '/assets/category/sympathy/product8.PNG',
            'Alluring Elegance Bouquet',
            115,
            'Sympathy',
            'An illuminating array of florals brings an air of elegance to any room it`s placed. This arrangement features refined florals like lilies,Queen Anne`s Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.'
        ),
        new Product(
            9,
            '/assets/category/sympathy/product9.PNG',
            'Beach House Bouquet',
            125,
            'Sympathy',
            'Take yourself on a seaside getaway with our Beach House Bouquet. The calming blue hydrangea is the perfect pair for the peach carnations and roses. Enjoy the fun lavender button pompons as a colorful contrast to the classic blooms.'
        ),
        new Product(
            10,
            '/assets/category/sympathy/product10.PNG',
            'Pastel Peace Basket',
            105,
            'Sympathy',
            'The Pastel Peace Basket is a sweet and simple way to offer your condolences. Lavender roses, fuchsia gerbera daisies, lavender daisies, purple larkspur, purple matsumoto asters, pink mini carnations and lush greens are arranged to perfection in a round whitewash handled basket to create a gift that expresses your wishes for sympathy and peace.'
        ),
        new Product(
            11,
            '/assets/category/sympathy/product11.PNG',
            'Picnic Tulips',
            70,
            'Sympathy',
            'Celebrate mom with the classic beauty of our Picnic Tulips. These captivating colors shine brightest in spring around fun birthdays, anniversaries and as a Mother`s Day surprise.'
        ),
        new Product(
            12,
            '/assets/category/sympathy/product12.PNG',
            'Sunshine & Joy Garden',
            65,
            'Sympathy',
            'The color yellow expresses happiness, imagination and fun, as does this garden! The perfect present for anyone on any occasion, this plant is filled to the brim with smiles. This garden is overflowing with a collection of two yellow Kalanchoes, a golden Pothos and a Croton plant. The flowers may arrive in buds, only to bloom in a short time.'
        ),
        new Product(
            13,
            '/assets/category/get-well/product13.PNG',
            'Fiesta Bouquet',
            95,
            'Get-well',
            'The Fiesta Bouquet is composed of a lively mix, fit to celebrate any and every moment. With a combination of vibrant flowers, this florist–designed arrangement brings a pop of color and a burst of excitement as soon as it arrives.'
        ),
        new Product(
            14,
            '/assets/category/get-well/product14.PNG',
            'Alluring Elegance Bouquet',
            115,
            'Get-well',
            'An illuminating array of florals brings an air of elegance to any room it`s placed. This arrangement features refined florals like lilies, Queen Anne`s Lace and Veronica in a clear glass vase to add a touch of sophisticated style to your special occasions.'
        ),
        new Product(
            15,
            '/assets/category/get-well/product15.PNG',
            'Beyond Blue Bouquet',
            92,
            'Get-well',
            'There is something about the shade of blue that brings a sense of calmness and serenity. Our Beyond Blue bouquet is designed with billowing white blooms and pops of bold florals to deliver just the right sentiment for any reason.'
        ),
        new Product(
            16,
            '/assets/category/get-well/product16.PNG',
            'Clear Skies Bouquet',
            135,
            'Get-well',
            'Let this uplifting arrangement be reminders of the clear skies ahead. Capturing the feeling of hope that a new day brings, this bouquet is composed of voluminous hydrangea blooms and vibrant belladonna delphinium to refresh their mood.'
        ),
        new Product(
            17,
            '/assets/category/get-well/product17.PNG',
            'Light of My Life Bouquet',
            80,
            'Get-well',
            'The Light of My Life Bouquet blossoms with brilliant color and a sweet sophistication to create the perfect impression! Pink Lilies make the eyes dance across the unique design of this flower bouquet, surrounded by the blushing colors of orange roses, lavender cushion poms, hot pink carnations, and lush greens. Presented in a clear glass vase, this fresh flower arrangement has been created just for you to help you send your sweetest thank you, happy anniversary, or thinking of you wishes.'
        ),
        new Product(
            18,
            '/assets/category/anniversary/product18.PNG',
            'Truly Stunning Bouquet',
            108,
            'Anniversary',
            'This dreamy jewel toned bouquet combines bold color and eye catching texture to make a statement. Featuring a thoughtful array of both roses and lilies, this dazzling assortment is bound to impress your recipient.'
        ),
        new Product(
            19,
            '/assets/category/anniversary/product19.PNG',
            'You`re Precious Bouquet',
            90,
            'Anniversary',
            'Blushing shades of pink blooms are nestled in lush greens to charm anyone`s day. This bouquet is abundant with a classic assortment of pretty florals - roses, alstroemeria and carnations to name a few.'
        ),
        new Product(
            20,
            '/assets/category/anniversary/product20.PNG',
            'Long Stem Red Rose Bouquet',
            200,
            'Anniversary',
            'You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist. Let our network of expert florists design this timeless red bouquet to make a statement for your special someone. Red flowers are an elegant, iconic and romantic gift for anyone close to your heart. Each rose is handcrafted and hand delivered to say I love you directly from a local florist to their home or office.'
        ),
        new Product(
            21,
            '/assets/category/anniversary/product21.PNG',
            'Pretty in Pink Belgian Chocolate Truffles',
            45,
            'Anniversary',
            'Send a little piece of your heart with the Pretty in Pink Truffles. Adorably designed in heart shapes with a pink and red coating for the holiday of love, this treat comes neatly packaged with 15 truffles aligned with their shade of pink.'
        ),
        new Product(
            22,
            '/assets/category/anniversary/product22.PNG',
            'Valentine`s Day Belgian Chocolate Covered Treat Sampler',
            45,
            'Anniversary',
            'Don`t make that special someone chose this February, and send the Valentine`s Day Belgian Chocolate Covered Treat Sampler instead. Try an assortment of holiday treats such as chocolate-dipped Rice Krispie® treats, chocolate cookies, mini chocolate pretzel twists, and more.'
        ),
        new Product(
            23,
            '/assets/category/congratulations/product23.PNG',
            'Bliss White Orchid',
            68,
            'Congratulations',
            'The most popular variety of this plant, the Phalaenopsis orchid makes a great gift for plant lovers and plant beginners alike! White orchids are easy to care for and add a touch of delicate beauty to any home, office or table.'
        ),
        new Product(
            24,
            '/assets/category/congratulations/product24.PNG',
            'Classic White Calla Lily',
            58,
            'Congratulations',
            'This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun.'
        ),
        new Product(
            25,
            '/assets/category/congratulations/product25.PNG',
            'Spring Fling Tulip Bulb Garden',
            45,
            'Congratulations',
            'Grow a pop of color for the changing season with the Assorted Spring Tulip Garden blooming pink, yellow and purple flowers. Nothing revitalizes a space like fresh flowers. Packed with bold bell-shaped blooms, this bulb garden is the perfect gift for any occasion.'
        ),
        new Product(
            26,
            '/assets/category/congratulations/product26.PNG',
            'Congrats Belgian Chocolate Covered Berry-Gram',
            55,
            'Congratulations',
            'Artisan Crafted Belgian Chocolate Covered Treats Crafted in a Small Batch Kitchen 12 Strawberries Hand Dipped in Belgian Dark Chocolate Hand Decorated with drizzles and White Chocolate Letters spelling out \"\"CONGRATS\"\" Arrives in an Elegant Gift Box'
        ),
    ];

    getProductsByCategory(productCategory: string) {
        return this.allProducts.filter(function (x) { return x.category == productCategory });
    }

    getProductsById(productId: number) {
        return this.allProducts.filter(function (x) { return x.id == productId });
    }

    // getNextProduct(productId:number){
    //     return this.allProducts.filter(function (x) {return x.id == productId + 1});
    // }

    // getPrevProduct(productId:number){
    //     return this.allProducts.filter(function(x) {return x.id == productId - 1})
    // }

    

}