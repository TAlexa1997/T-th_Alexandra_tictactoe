class TTTModel {
  #lepes;
  #ertek = "";
  
  constructor() {
    this.#lepes = 0;
  }

  aktualisJatekos() {
    //console.log(event.detail);
    this.#lepes++;
    if (this.#lepes % 2 == 0) {
      this.#ertek = "<span class='X'>X</span>";
    } else {
      this.#ertek ="<span class='O'>O</span>";
    }
    return this.#ertek;
  }

  KovetkezoJatekos(){
    let kovetkezik="";
    if (this.#lepes % 2 == 0) {
        kovetkezik = "<span class='X'>X</span>";
      } else {
        kovetkezik = "<span class='O'>O</span>";
      }
      return this.kovetkezik;
  }
}
export default TTTModel;
