import Kepek from "./Kepek.js";
import LepteoKezelo from "./LeptetesKezelo.js";
import { OBJLISTA } from "./tomb.js";

let szuloElem = document.getElementsByClassName("galeria")[0];
const KEPEK = new Kepek(OBJLISTA, szuloElem)

/* let k1 = new Kep(obj[0].cim, obj[0].src, szuloElem); */

let nkep = document.getElementsByClassName("kiemelt")[0];
new LepteoKezelo(OBJLISTA, nkep);
