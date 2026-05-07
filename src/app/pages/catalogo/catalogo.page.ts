import { Component } from '@angular/core';
import {
  IonBadge,
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
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
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
    IonBadge,
    IonButton,
    NgFor,
    RouterLink,
  ],
})
export class CatalogoPage {
  productos: Producto[] = [
    {
      id: '1',
      nombre: 'Tomate local',
      descripcion: 'Tomate fresco cultivado por productores locales.',
      agricultorId: 'agricultor1',
      agricultorNombre: 'Finca San Lorenzo',
      cantidadDisponible: 80,
      unidad: 'kg',
      precio: 2.4,
      fechaDisponibilidad: '2026-05-10',
      lote: 'TOM-001',
      estado: 'disponible',
    },
    {
      id: '2',
      nombre: 'Lechuga ecológica',
      descripcion: 'Lechuga fresca para comedores escolares y residencias.',
      agricultorId: 'agricultor2',
      agricultorNombre: 'Huerta del Norte',
      cantidadDisponible: 50,
      unidad: 'unidades',
      precio: 1.2,
      fechaDisponibilidad: '2026-05-12',
      lote: 'LEC-002',
      estado: 'disponible',
    },
  ];
}
