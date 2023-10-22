class InfoView {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#Osszeallit();
    this.pElem = $(".kovetkezik p");
  }

  setpElem(kovetkezo) {
    this.pElem.html( kovetkezo + "    &nbsp;&nbsp;&nbsp;  " +"következik!");
  }

  #Osszeallit() {
    let txt = "<h2>Ki a következő?</h2>";
    txt += "<p></p>";
    this.szuloElem.html(txt);
  }
}
export default InfoView;
