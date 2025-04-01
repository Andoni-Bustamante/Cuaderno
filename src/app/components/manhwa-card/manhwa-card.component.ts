import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { Manhwa } from '../../interfaces/manhwa';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-manhwa-card',
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './manhwa-card.component.html',
  styleUrls: ['./manhwa-card.component.css']
})
export class ManhwaCardComponent {
  @Input() manhwa!: Manhwa; // Recibe un objeto Manhwa como entrada
}
