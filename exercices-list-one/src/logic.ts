export default class Logic {
    private base: number;
    private height: number;

    public constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    // calculate area
    public calcArea(): number{
        let area = this.height * this.base;
        return area;
    }

    //calculate paerimeter
    public calcPerimeter(): number {
        let perimeter = (this.base + this.height) * 2;
        return perimeter;
    }

    // viwer
    public showCalcs(): string{
        return `This area is ${this.calcArea()}, and this perimeter is ${this.calcPerimeter()}`;
    }
}