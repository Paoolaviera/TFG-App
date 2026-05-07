import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
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
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-panel-agricultor',
  templateUrl: './panel-agricultor.page.html',
  styleUrls: ['./panel-agricultor.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    NgFor,
    RouterLink,
  ],
})
export class PanelAgricultorPage {
  productos: Producto[] = [
    {
      id: '1',
      nombre: 'Tomate local',
      descripcion: 'Tomate fresco cultivado en finca local.',
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
      nombre: 'Papa del país',
      descripcion: 'Papa local para pedidos de restauración colectiva.',
      agricultorId: 'agricultor1',
      agricultorNombre: 'Finca San Lorenzo',
      cantidadDisponible: 120,
      unidad: 'kg',
      precio: 1.8,
      fechaDisponibilidad: '2026-05-15',
      lote: 'PAP-002',
      estado: 'disponible',
    },
  ];
}
