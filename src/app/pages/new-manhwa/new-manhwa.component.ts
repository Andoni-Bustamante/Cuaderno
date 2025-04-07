import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';
import { Manhwa } from '../../interfaces/manhwa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-manhwa',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatSelectModule, CommonModule],
  templateUrl: './new-manhwa.component.html',
  styleUrls: ['./new-manhwa.component.css']
})
export class NewManhwaComponent {
  manhwa: Manhwa = {
    titulo: '',
    imagenUrl: '',
    capitulo: 0,
    dia: ''
  };

  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async guardarManhwa() {
    try {
      const data = await this.supabaseService.addManhwa(this.manhwa);
      alert('Manhwa guardado con éxito');
      this.router.navigate(['/manhwa']); 
    } catch (error) {
      console.error('Error al guardar el manhwa:', error);
      alert('Error al guardar el manhwa');
    }
  }

  actualizarPrevisualizacion() {
    // Este método se llama cada vez que se actualiza la URL de la imagen
    console.log('Previsualización actualizada:', this.manhwa.imagenUrl);
  }

  validarNumero(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    // Permitir solo números (0-9) y teclas de control como Backspace
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  cancelar() {
    this.router.navigate(['/manhwa']);
  }
}
