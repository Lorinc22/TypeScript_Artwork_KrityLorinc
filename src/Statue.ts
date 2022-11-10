import { Artwork } from "./Artwork";

export class Statue implements Artwork{
    height:number;

    constructor(height:number){
        this.height = height; 
    }

    get title(){
        return this.title};
    set title(title: string){
        this.title = this.title;
    }

    get price(){
        return this.price};
    set price(title: number){
        this.price = this.price;
    }

    get year(){
        return this.year};
    set year(title: number){
        this.year = this.year;
    }

} 