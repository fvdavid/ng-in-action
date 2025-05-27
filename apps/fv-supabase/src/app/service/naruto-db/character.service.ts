import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Character } from '../../model/character.model';

@Injectable()
export class CharacterService {
  private supabase: SupabaseClient;
  #superUrl = 'https://fjnpubejjogeyluuxwll.supabase.co';
  #superKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqbnB1YmVqam9nZXlsdXV4d2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTE3MTMsImV4cCI6MjA2Mzg2NzcxM30.7KdN7AxM_jirKUWlpIOLF1L2t7VOOgrdHEHExbgYJKA';

  constructor() {
    this.supabase = createClient(this.#superUrl, this.#superKey);
  }

  async getAll() {
    const { data, error } = await this.supabase.from('naruto_db').select('*');
    return { data, error };
  }

  async getById(id: number) {
    const { data, error } = await this.supabase
      .from('naruto_db')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }

  async create(record: Character) {
    const { data, error } = await this.supabase
      .from('naruto_db')
      .insert([record]);
    return { data, error };
  }

  async update(id: number, record: Character) {
    const { data, error } = await this.supabase
      .from('naruto_db')
      .update(record)
      .eq('id', id);
    return { data, error };
  }

  async delete(id: number) {
    const { data, error } = await this.supabase
      .from('naruto_db')
      .delete()
      .eq('id', id);
    return { data, error };
  }
}
