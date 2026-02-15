export default class LogicalList {
    public constructor(){}

    // checking if a number is prime
    public isPrime(n: number): string {
        if (n <= 1) {
            return `It's not a prime number`;
        }

        let num = Math.floor(Math.sqrt(n));
        for(let i = 2; i <= num; i++){
            if (n % i === 0) {
                return `It is not a prime number.`
            }
        }
        return `It is a prime number`;
    }

    // checking validity
    public validity(day: number, month: number, year: number): void {
        const today = new Date();
        const expirationDate = new Date(year, month - 1, day);
        
        if(expirationDate < today)
            console.log("Expired!");

        console.log("Product in good condition")
    }
}

const test = new LogicalList();
console.log(test.isPrime(10));