import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Sophia Raul",
    data: "13 de Maio de 2019",
    descricao: "Site para aprendizado de fronte-end com ionic",
    qntd_likes: 12,
    qntd_commets: 4,
    time_commet: "11h ago"
  }

  public nome_usuario:string = "Ramon Fernandes do codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
   //this.somaDoisNumeros(12, 34);
  }

}
