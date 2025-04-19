import { Component } from '@angular/core';
import { ManhwaCardComponent } from "../../components/manhwa-card/manhwa-card.component";
import { Manhwa } from '../../interfaces/manhwa';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-manhwas',
  imports: [ManhwaCardComponent, CommonModule],
  templateUrl: './manhwas.component.html',
  styleUrl: './manhwas.component.css'
})
export class ManhwasComponent {
  manhwas: Manhwa[] = []; // Inicializamos el array vacío


  async ngOnInit() {
    try {
      // Llamamos al servicio para obtener los registros de la base de datos
      //this.manhwas = await this.supabaseService.getManhwas();
      console.log('Manhwas cargados:', this.manhwas);
    } catch (error) {
      console.error('Error al cargar los manhwas:', error);
    }
  }
}
