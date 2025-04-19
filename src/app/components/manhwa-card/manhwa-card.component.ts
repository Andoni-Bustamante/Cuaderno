import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { Manhwa } from '../../interfaces/manhwa';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manhwa-card',
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIcon, RouterModule],
  templateUrl: './manhwa-card.component.html',
  styleUrls: ['./manhwa-card.component.css']
})
export class ManhwaCardComponent {
  @Input() manhwa!: Manhwa; // Recibe un objeto Manhwa como entrada


  async incrementarCapitulo() {/*
    try {
      this.manhwa.capitulo++;
      await this.supabaseService.updateCapitulo(this.manhwa.id!, this.manhwa.capitulo);
      console.log(`Capítulo incrementado: ${this.manhwa.capitulo}`);
    } catch (error) {
      console.error('Error al incrementar el capítulo:', error);
    }*/
  }

  async decrementarCapitulo() {/*
    try {
      if (this.manhwa.capitulo > 0) {
        this.manhwa.capitulo--;
        await this.supabaseService.updateCapitulo(this.manhwa.id!, this.manhwa.capitulo);
        console.log(`Capítulo decrementado: ${this.manhwa.capitulo}`);
      }
    } catch (error) {
      console.error('Error al decrementar el capítulo:', error);
    }*/
  }

  
}
