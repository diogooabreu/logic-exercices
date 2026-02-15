export default class FirstPrimes{
    private n: number;

    public constructor(n: number){
        this.n = n;
    } 

    public firstPrimes(): number[] {
        const primes: number[] = [];
        let candidate = 2;

        while(primes.length < this.n){
            if(this.isPrime(candidate))
                primes.push(candidate);

            candidate ++;
        }

        return primes;
    }

    public isPrime(num: number): boolean {
        if (num < 2)
            return false;

        const limit = Math.floor(Math.sqrt(num));
        for(let i = 2; i <= limit; i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
}

const p = new FirstPrimes(10);
console.log(p.firstPrimes());