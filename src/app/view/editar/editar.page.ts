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
    this.especie= this.animal.especieAnimal;
    this.nome=this.animal.nomeAnimal;
    this.genero=this.animal.generoAnimal;
    this.peso=this.animal.pesoAnimal;
    this.saude=this.animal.saudeAnimal;
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
    novo.pesoAnimal=this.peso;
    novo.saudeAnimal=this.peso;
    this.firebase.update(novo, this.animal.id);
    this.router.navigate(['/home']);
  }

  excluir(){
    this.firebase.delete(this.animal.id);
    this.router.navigate(['/home']);
  }

}
