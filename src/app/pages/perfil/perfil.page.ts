import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    RouterLink,
  ],
})
export class PerfilPage {
  usuario: Usuario = {
    uid: 'cliente1',
    nombre: 'Comedor Escolar San Lorenzo',
    email: 'comedor@sanlorenzo.com',
    rol: 'restauracion',
    telefono: '928000000',
    entidad: 'Colegio San Lorenzo',
    tipoEntidad: 'colegio',
  };
}
