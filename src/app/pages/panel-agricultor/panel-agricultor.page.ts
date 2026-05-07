import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-panel-agricultor',
  templateUrl: './panel-agricultor.page.html',
  styleUrls: ['./panel-agricultor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PanelAgricultorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
