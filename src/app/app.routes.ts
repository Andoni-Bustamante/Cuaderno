import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewManhwaComponent } from './pages/new-manhwa/new-manhwa.component';
import { NewAnimeComponent } from './pages/new-anime/new-anime.component';
import { EditManhwaComponent } from './pages/edit-manhwa/edit-manhwa.component';
import { EditAnimeComponent } from './pages/edit-anime/edit-anime.component';
import { ManhwasComponent } from './pages/manhwas/manhwas.component';
import { AnimesComponent } from './pages/animes/animes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'anime', component: AnimesComponent },
  { path: 'manhwa', component: ManhwasComponent },
  { path: 'newManhwa', component: NewManhwaComponent },
  { path: 'newAnime', component: NewAnimeComponent },
  { path: 'editManhwa', component: EditManhwaComponent },
  { path: 'editAnime', component: EditAnimeComponent },
];
