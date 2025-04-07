import { Component } from '@angular/core';
import { Manhwa } from '../../interfaces/manhwa';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edit-manhwa',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatSelectModule, CommonModule],
  templateUrl: './edit-manhwa.component.html',
  styleUrl: './edit-manhwa.component.css'
})
export class EditManhwaComponent {
  manhwa: Manhwa = {
    titulo: '',
    imagenUrl: '',
    capitulo: 0,
    dia: ''
  };

  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        const data = await this.supabaseService.getManhwaById(Number(id));
        if (data) {
          this.manhwa = data;
        }
      } catch (error) {
        console.error('Error al cargar el manhwa:', error);
      }
    }
  }

  async guardarCambios() {
    try {
      await this.supabaseService.updateManhwa(this.manhwa);
      alert('Cambios guardados con éxito');
      this.router.navigate(['/manhwa']);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      alert('Error al guardar los cambios');
    }
  }

  async borrarManhwa() {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este manhwa?');
    if (confirmacion) {
      try {
        await this.supabaseService.deleteManhwa(this.manhwa.id!);
        alert('Manhwa eliminado con éxito');
        this.router.navigate(['/manhwa']); 
      } catch (error) {
        console.error('Error al eliminar el manhwa:', error);
        alert('Error al eliminar el manhwa');
      }
    }
  }

  cancelar() {
    this.router.navigate(['/manhwa']);
  }
}
