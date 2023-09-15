import { Injectable } from "@angular/core";
import { Animais } from "../entities/Animais";
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private PATH : string = 'animais';

    constructor(private firestore: AngularFirestore) {}

    read(){
        return this.firestore
        .collection(this.PATH).snapshotChanges();
    }

    create(animal: Animais){
        return this.firestore
        .collection(this.PATH).add({
            especie: animal.especie,
            nome: animal.nome,
            genero: animal.genero,
            peso: animal.peso,
            saude: animal.saude
        });
    }

    update(animal: Animais, id: string){
        return this.firestore
        .collection(this.PATH).doc(id).update({
            especie: animal.especie,
            nome: animal.nome,
            genero: animal.genero,
            peso: animal.peso,
            saude: animal.saude
        });
    }

    delete(id:string){
        return this.firestore
        .collection(this.PATH).doc(id).delete();
    }
}