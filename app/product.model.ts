// import { Ingredient } from '../shared/ingredient.model';

export class Product {
    public pname: string;
    public price: number;
    public description: string;
    public stocks: number;
    public category: string;

    constructor(name: string, price: number, desc: string, stocks: number, cat: string) {

        this.pname = name;
        this.description = desc;
        this.price = price;
        this.stocks = stocks;
        this.category = cat;
    }
}
