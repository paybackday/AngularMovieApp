export class Movie{

    /**
     *
     */
    constructor() {
        this.title="";
        this.description="";
        this.imageUrl="";
        this.isPopular=null;
        this.categoryId=null;
    }

    id:number;
    title:string;
    description:string;
    imageUrl:string;
    isPopular:boolean;
    categoryId:number;
}