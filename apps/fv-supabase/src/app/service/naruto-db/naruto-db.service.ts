import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from './../../../environments/environment';
import { Naruto } from '../../model/naruto.model';

@Injectable()
export class NarutoDbService {
  #supabaseUrl = environment.supabaseUrl;
  #supabaseKey = environment.supabaseKey;
  #supabase = createClient(this.#supabaseUrl, this.#supabaseKey);

  async getNarutoCharacters() {
    const { data, error } = await this.#supabase.from('naruto_db').select('*');
    return { data, error };
  }

  async addCharacter(naruto: Naruto) {
    const { data, error } = await this.#supabase
      .from('naruto_db')
      .insert([naruto]);
    return { data, error };
  }

  async updateCharacter(id: number, naruto: Naruto) {
    const { data, error } = await this.#supabase
      .from('naruto_db')
      .update(naruto)
      .eq('id', id);
    return { data, error };
  }

  async deleteCharacter(id: number) {
    const { data, error } = await this.#supabase
      .from('naruto_db')
      .delete()
      .eq('id', id);
    return { data, error };
  }
}
