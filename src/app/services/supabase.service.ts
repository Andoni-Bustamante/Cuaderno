import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Manhwa } from '../interfaces/manhwa';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  // Método para insertar un nuevo manhwa
  async addManhwa(manhwa: Manhwa) {
    const { data, error } = await this.supabase.from('Manhwa').insert([manhwa]);
    if (error) {
      throw error;
    }
    return data;
  }

  // Método para obtener todos los manhwas
  async getManhwas() {
    const { data, error } = await this.supabase.from('Manhwa').select('*');
    if (error) {
      throw error;
    }
    return data;
  }
}
