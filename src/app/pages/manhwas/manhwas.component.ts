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
manhwas: Manhwa[] = [
    {
      titulo: 'Solo Leveling',
      capitulo: 179,
      imagenUrl: 'https://i.blogs.es/2b941f/solo-leveling/500_333.jpeg',
    },
    {
      titulo: 'Tower of God',
      capitulo: 550,
      imagenUrl: 'https://play-lh.googleusercontent.com/uPhV1ypZr0gY1C5r2q2bFI7P6NkJwpdlj9FoMbbo9PjYSd5g-5CeY3fnYyAlBT4hZw=w526-h296-rw',
    },
    {
      titulo: 'The Beginning After the End',
      capitulo: 150,
      imagenUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/the-beginning-after-the-end-arthur-leywin-and-sylphy.jpg',
    }
  ];
}
