import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animais } from 'src/app/model/entities/Animais';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  especie!: string;
  nome!: string;
  genero!: number;
  peso!: number;
  saude!: number;

  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService) { }

  ngOnInit() {
  }

  registrar(){
    if(!this.nome || !this.especie || !this.genero){
      this.presentAlert("Erro","Nome, especie e genero são obrigatorios");
    }else{
      this.presentAlert("Sucesso", "Animal registrado");
      let novo: Animais = new Animais(this.especie, this.nome, this.genero);
      novo.peso = this.peso;
      novo.saude= this.saude;
      this.firebase.create(novo);
      this.router.navigate(["/home"]);
    }
  }

  async presentAlert(subHeader: string, message: string){
    const alert = await this.alertController.create({
      header: 'registro de animais',
      subHeader: subHeader,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }

}
