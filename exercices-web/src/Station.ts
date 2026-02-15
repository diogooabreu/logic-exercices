import Gas from "./Gas.js";

export default class Station{
    name: string;
    gasoline: Gas;
    ethanol: Gas;

    public constructor(name: string, gasoline: Gas, ethanol: Gas){
        this.name = name;
        this.gasoline = gasoline;
        this.ethanol = ethanol;
    }

    public suggestFuel(): void {
        const difPrice = this.ethanol.getPrice() / this.gasoline.getPrice();
        let porcentage = (difPrice * 100).toFixed(2);

        if(difPrice < 0.7){
            console.log(`At gas station ${this.name} it is advantageous to fill up with ethanol. The price difference is: ${porcentage}%`)
        } else {
            console.log(`At gas station ${this.name} it is advantageous to fill up with gasoline. The price difference is: ${porcentage}%`)
        }
    }
}