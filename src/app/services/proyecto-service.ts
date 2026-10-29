import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private http = inject(HttpClient);
  private url = 'http://localhost:3002/proyectos';

  proyectos = signal<Proyecto[]>([]);

  cargar() {
    return this.http.get<Proyecto[]>(this.url).subscribe({
      next: (data) => {
        this.proyectos.set(data);
      },
      error: (error) => {
        console.error('Error al cargar proyectos:', error);
      }
    });
  }

  getById(id: string) {
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }
}