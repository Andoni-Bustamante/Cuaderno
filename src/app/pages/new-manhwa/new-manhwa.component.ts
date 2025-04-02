import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-manhwa',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './new-manhwa.component.html',
  styleUrls: ['./new-manhwa.component.css']
})
export class NewManhwaComponent {
  manhwa = {
    titulo: '',
    imagenUrl: '',
    capitulo: 0
  };

  guardarManhwa() {
    console.log(this.manhwa); // Imprime el objeto en la consola
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
}
