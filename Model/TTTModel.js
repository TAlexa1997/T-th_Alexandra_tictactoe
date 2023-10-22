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

  kovetkezoJatekos(){
    let kovetkezo;
    if (this.#lepes % 2 == 0) {
      kovetkezo = "<span class='O'>O</span>";
      } else {
        kovetkezo = "<span class='X'>X</span>";
        
      }
      return kovetkezo;
      
  }
}
export default TTTModel;
