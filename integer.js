// Math

let chislo1, chislo2;

chislo1 = 45, chislo2 = 65;

console.log(chislo1 + chislo2);
console.log(chislo1 * chislo2);
console.log((chislo1 / chislo2).toFixed(2));
console.log(chislo1 - chislo2);
console.log(chislo1 - chislo2);

console.log(5 % 4);
console.log(2 ** 8);
console.log(Math.pow(2, 16));

console.log(Math.trunc(Math.random() * 100));

let darba_alga_bruto,
    darba_deveja_izmaksas,
    darba_nemeja_SOC_izmaksas,
    darba_nemeja_IIN,
    darba_alga_neto;

darba_alga_bruto = 1500;
darba_deveja_izmaksas = darba_alga_bruto * 0.2359;
darba_nemeja_SOC_izmaksas = darba_alga_bruto * 0.1050;
darba_nemeja_IIN = (darba_alga_bruto - darba_deveja_izmaksas - darba_nemeja_SOC_izmaksas) * 0.20;
darba_alga_neto = darba_alga_bruto - darba_nemeja_SOC_izmaksas - darba_nemeja_IIN;

console.log("Alga bruto = " + darba_alga_bruto + " euro;");
console.log("Darba deveja izmaksas = " + darba_deveja_izmaksas + " euro;");
console.log("Darba nemeja SOC izmaksas = " + darba_nemeja_SOC_izmaksas + " euro;");
console.log("Darba nemeja IIN = " + darba_nemeja_IIN + " euro;");
console.log("Alga neto = " + darba_alga_neto + " euro;");

