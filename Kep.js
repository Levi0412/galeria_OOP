export default class Kep {
  #cim;
  #src;
  #leiras;
  #index;
  constructor(index, cim, src, leiras, szuloElem) {
    this.#index = index;
    this.#cim = cim;
    this.#src = src;
    this.#leiras = leiras;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemenykezelo();
  }

  esemenykezelo() {
    /* megfogjuk az adott objektumhoz tartozó kép elemet
        ráteszünk egy kattintás eseményt */
    this.kepElem = document.querySelector(".kep:last-child");
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }

  megjelenit() {
    let html = `<div class="kep">
                        <img src="${this.#src}" alt="">


                    </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}

/* A function névtelen függvény esetén, egy eseménykezelőben a this arra az elemre mutat, amelyik az eseményt kiváltotta.(event targer hasonló)
Nyílfüggvény esetén a this arra az objektumra mutatt, amelyiknek a hatókörében a nyílfüggvény szerepel */
