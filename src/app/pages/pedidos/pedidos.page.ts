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
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
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
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonBadge,
    NgFor,
    RouterLink,
  ],
})
export class PedidosPage {
  pedidos: Pedido[] = [
    {
      id: '1',
      clienteId: 'cliente1',
      clienteNombre: 'Comedor Escolar San Lorenzo',
      entidad: 'Colegio',
      productos: [
        {
          productoId: '1',
          nombre: 'Tomate local',
          cantidad: 20,
          unidad: 'kg',
          precio: 2.4,
          subtotal: 48,
          agricultorId: 'agricultor1',
        },
      ],
      fechaPedido: '2026-05-07',
      fechaEntregaPrevista: '2026-05-14',
      estado: 'pendiente',
      total: 48,
      observaciones: 'Entrega por la mañana.',
    },
  ];
}
