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