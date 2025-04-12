const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];


// 1. Vypište do stránky všechna čísla.
numbers.forEach((vsechnaCisla) => {
    document.body.innerHTML += `<div>Číslo ${vsechnaCisla}</div>`;
  });

  document.body.innerHTML += "<br>"

// 2. Vypište do stránky druhé mocniny všech čísel.
numbers.forEach((druhaMocnina) => {
    document.body.innerHTML += `<div>Druhá mocnina čísla ${druhaMocnina} je ${druhaMocnina ** 2}</div>`;
});

  document.body.innerHTML += "<br>"

// 3. Vypište do stránky pouze záporná čísla.
numbers.forEach((zaporneCislo) => {
    if (zaporneCislo < 0) { 
        document.body.innerHTML += `<div>Záporné číslo ${zaporneCislo}</div>`;
    }
});

document.body.innerHTML += "<br>"

// 4. Vypište do stránky absolutní hodnotu všech čísel.
numbers.forEach((absolutniHodnota) => {
    document.body.innerHTML += `<div>Absolutní hodnota čísla ${absolutniHodnota} je ${Math.abs(absolutniHodnota)}</div>`;
});

document.body.innerHTML += "<br>"

// 5. Vypište do stránky pouze sudá čísla.
numbers.forEach((sudeCislo) => {
    if (sudeCislo % 2 === 0) { 
        document.body.innerHTML += `<div>Sudé číslo ${sudeCislo}</div>`;
    }
});

document.body.innerHTML += "<br>"

// 6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
numbers.forEach((absolutniHodnotaTri) => {
    if (Math.abs(absolutniHodnotaTri) % 3 === 0) { 
        document.body.innerHTML += `<div>Absolutní hodnota ${absolutniHodnotaTri} je dělitelna třemi.</div>`;
    }
});

document.body.innerHTML += "<br>"

// 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
    numbers.forEach((cisloPet) => {
        const vzdalenost = Math.abs(cisloPet - 5);
        const li = document.createElement("li");
        document.body.innerHTML += `Číslo ${cisloPet} je od 5 vzdáleno ${vzdalenost}<br>`;
});

document.body.innerHTML += "<br>"

// 8. Vypište do stránky druhé mocniny vzdáleností všech čísel od čísla 5.
numbers.forEach((cislo) => {
    const vzdalenost = Math.abs(cislo - 5);
    const druhaMocnina = vzdalenost ** 2;
    document.body.innerHTML += `<div>Druhá mocnina vzdálenosti čísla ${cislo} od 5 je ${druhaMocnina}</div>`;
});

document.body.innerHTML += "<br>";

// 9. Spočítejte, kolik je v seznamu záporných čísel.
let pocetZapornych = 0;
numbers.forEach((cislo) => {
    if (cislo < 0) {
        pocetZapornych++;
    }
});
document.body.innerHTML += `<div>Počet záporných čísel: ${pocetZapornych}</div>`;

document.body.innerHTML += "<br>";

// 10. Spočítejte součet všech čísel v poli.
let soucet = 0;
numbers.forEach((cislo) => {
    soucet += cislo;
});
document.body.innerHTML += `<div>Součet všech čísel: ${soucet}</div>`;

document.body.innerHTML += "<br>";

// 11. Spočítejte průměr všech čísel v poli.
let prumer = soucet / numbers.length;
document.body.innerHTML += `<div>Průměr všech čísel: ${prumer.toFixed(2)}</div>`;

document.body.innerHTML += "<br>";

// 12. Spočítejte součet všech kladných čísel v poli.
let soucetKladnych = 0;
numbers.forEach((cislo) => {
    if (cislo > 0) {
        soucetKladnych += cislo;
    }
});
document.body.innerHTML += `<div>Součet všech kladných čísel: ${soucetKladnych}</div>`;