export default class Logic{
    // Calculate area and perimeter of a square
    public calcSquareMeasurements(side: number): string {
        let area = side * side;
        let perimeter = (side + side) * 2;

        return `This area od square is ${area}cm, and this perimeter is ${perimeter}cm.`;
    }

    // measurements of circle
    public calcCircleArea(ray: number): string {
        const PI = 3.14;
        let area = (PI * ray) ^ 2;
        let perimeter = Math.trunc(2 * PI * ray);

        return `Area fo this circle: ${area}. Perimeter of this circle: ${perimeter}`;
    }

    // measurements of triangle
    public calcTriangleMeasurements(sideA: number, sideB: number, sideC: number): string {
        let perimeter = sideA + sideB + sideC;

        return `This perimeter is: ${perimeter}`;
    }

    //display successor of n
    public successor(n: number): string {
        let successor = n + 1;

        return `This successor is: ${successor}`;
    }

    // division
    public division(a: number, b: number): string {
        const quotient = Math.floor(a / b);
        const rest = a % b;

        return `The remainder os this division is: ${rest}, and this quotient is ${quotient}.`;
    }

    // It receives a number of days and returns the individual's age
    public calcAge(days: number): string {
        let years: number,
            months: number,
            aux: number;

        years = Math.floor(days / 365);
        aux = days % 365;
        months = Math.floor(aux / 30);
        days = aux % 30;

        return `This person have ${years} years, ${months} months and ${days} days.`;
    }

    // Convert temperature from Fahrenheit to Celsius.
    public convert(temp: number): string {
        const tempCelsius = (5 * 9 / (temp - 32)).toFixed(2);

        return `The temperature em degree Celsius is ${tempCelsius}°C.`;
    }
}