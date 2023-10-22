import Jatekter from "../View/Jatekter.js";
import TTTModel from "../Model/TTTModel.js";
import InfoView from "../View/InfoView.js";

class TTTController {
  constructor() {
    new Jatekter($(".jatekter"), 4);
    this.tttModel= new TTTModel();
    this.infoView = new InfoView($(".kovetkezik"));
    $(window).on("elemKivalaszt", (event) => {
      //itt hívom meg a Model-t hogy mondja meg hogy ki jön
      let ertek =this.tttModel.aktualisJatekos();
      event.detail.setErtek(ertek);
      let kovJa= this.tttModel.kovetkezoJatekos();
      this.infoView.setpElem(kovJa);
    });
    
  }
}
export default TTTController;
