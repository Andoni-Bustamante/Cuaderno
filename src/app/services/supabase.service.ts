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
    const { data, error } = await this.supabase.from('Manhwa').select('*').order('titulo', { ascending: true });;
    if (error) {
      throw error;
    }
    return data;
  }

  async updateCapitulo(id: number, nuevoCapitulo: number): Promise<void> {
    const { error } = await this.supabase
      .from('Manhwa')
      .update({ capitulo: nuevoCapitulo })
      .eq('id', id);

    if (error) {
      throw error;
    }
  }

  async getManhwaById(id: number): Promise<Manhwa | null> {
    const { data, error } = await this.supabase
      .from('Manhwa')
      .select('*')
      .eq('id', id)
      .single();
  
    if (error) {
      throw error;
    }
    return data;
  }
  
  // Actualizar un manhwa
  async updateManhwa(manhwa: Manhwa): Promise<void> {
    const { error } = await this.supabase
      .from('Manhwa')
      .update(manhwa)
      .eq('id', manhwa.id);
  
    if (error) {
      throw error;
    }
  }

  // Método para eliminar un manhwa por ID
async deleteManhwa(id: number): Promise<void> {
  const { error } = await this.supabase
    .from('Manhwa')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
}
}
