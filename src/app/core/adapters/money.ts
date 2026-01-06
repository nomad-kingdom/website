export function moneyTransform(value: number, replace: string = ',', to: string = '.'): string | undefined {
    return parseFloat(value.toString()).toFixed(2).replace(to, replace).replace(/\B(?=(\d{3})+(?!\d))/g, to);
}