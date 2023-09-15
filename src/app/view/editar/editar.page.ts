import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/entities/Animais';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  animal! : Animais;
  especie! : string;
  nome! : string;
  genero! : number; 
  peso! : number;
  saude! : number;
  edicao : boolean = true;

  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.animal=history.state.animal;
    this.especie= this.animal.especie;
    this.nome=this.animal.nome;
    this.genero=this.animal.genero;
    this.peso=this.animal.peso;
    this.saude=this.animal.saude;
  }
  PermitirEdicao(){
    if(this.edicao){
      this.edicao=false;
    }else{
      this.edicao=true;
    }
  }

  editar(){
    let novo : Animais = new Animais(this.especie, this.nome, this.genero);
    novo.peso=this.peso;
    novo.saude=this.peso;
    this.firebase.update(novo, this.animal.id);
    this.router.navigate(['/home']);
  }

  excluir(){
    this.firebase.delete(this.animal.id);
    this.router.navigate(['/home']);
  }

}
