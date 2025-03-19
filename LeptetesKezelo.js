import NagyKep from "./NagyKep.js";
export default class LepteoKezelo {
  #aktIndex;
  #lista = [];
  constructor(lista, szuloElem) {
    /* példányosítjuk a NagyKep osztályt, szeretnénk kezelni a léptetését */
    this.#lista = lista;
    this.#aktIndex = 0;
    this.szuloElem = szuloElem;
    this.jobbGombElem = document.getElementsByClassName("jobb")[0];
    this.#lista = lista;
    this.peldanyosit();
    this.esemenykezelo();
    this.kisKepKezeles();
  }
  peldanyosit() {
    const NAGYKEP = new NagyKep(
      this.#lista[this.#aktIndex].cim,
      this.#lista[this.#aktIndex].src,
      this.#lista[this.#aktIndex].leiras,
      this.szuloElem
    );
  }

  kisKepKezeles() {
    windows.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
    });
  }

  esemenykezelo() {
    this.jobbGombElem.addEventListener("click", () => {
      this.#aktIndex++;
      this.#aktIndex = this.#aktIndex % this.#lista.length;
      const NAGYKEP = new NagyKep(
        this.#lista[this.#aktIndex].cim,
        this.#lista[this.#aktIndex].src,
        this.#lista[this.#aktIndex].leiras,
        this.szuloElem
      );
    });
  }
}

/* jobbra kattintva léptessük a képeket 
  1. meg kell fogni a jobb gombot
  2. kell egy eseménykezelő
  2,5. létre kell hozni egy aktIndex változót 
  3. indexet kell növelni. - OBJLISTA-nak hányadik eleménél tartok
  
  */
