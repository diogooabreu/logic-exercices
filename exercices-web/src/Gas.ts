const GASOLINE = 'gasolina'; 
const ETHANOL = 'ethanol';

export default class Gas {
    private type: string;
    private price: number;

    public constructor(type: string, price: number){
        this.type = type;
        this.price = price;
    }

    public getType(): string {
        return this.type;
    }

    public getPrice(): number {
        return this.price;
    }
}