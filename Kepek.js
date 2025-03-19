import Kep from "./Kep.js";

export default class Kepek {
  #lista;
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      const KEP = new Kep(
        index,
        this.#lista[index].cim,
        this.#lista[index].src,
        null,
        this.szuloElem
      );
    }
  }
}
