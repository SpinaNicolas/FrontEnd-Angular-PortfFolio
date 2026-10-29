import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../services/proyecto-service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-proyecto-details',
  imports: [],
  templateUrl: './proyecto-details.html',
  styleUrl: './proyecto-details.css',
})
export class ProyectoDetails implements OnInit {

  private proyectoService = inject(ProyectoService);
  private route = inject(ActivatedRoute);

  proyecto = signal<Proyecto | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.proyectoService.getById(id).subscribe({
        next: (data) => {
          this.proyecto.set(data);
        },
        error: (error) => {
          console.error('Error al obtener el proyecto:', error);
        }
      });
    }
  }
}