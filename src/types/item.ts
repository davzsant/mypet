export interface iCartItem{
    productName: string;
    price: number;
    imgPath: string;
    cod: number;
}

export interface iCategorysTypes{
    type:string;
    url:string;
}

export interface iCategoryTopics{
    topic:string;
    url:string;
    types:iCategorysTypes[];
}

export interface iCatagory{
    name:string;
    url:string;
    icon:string;
    topics:iCategoryTopics[];
}

export interface  iImagesCarrosel{
    imgPath:string,
    link:string,
    alt?:string
}

export interface iPromotion{
    link:string;
    image:string;
    desc:string;
    produtoID:number
}

export interface iPromotionProps{
    animal:string;
    mainPromotion:iPromotion;
    secondPromotion:iPromotion;
    thirdPromotion:iPromotion;
    fourtyPromotion:iPromotion;
    fiftyPromotion:iPromotion;
}

