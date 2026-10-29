import { Component, inject, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-proyectos-list',
  styleUrl: './proyectos-list.css',
  templateUrl: './proyectos-list.html',
})
export class ProyectosList implements OnInit {

  proyectoService = inject(ProyectoService);

  ngOnInit() {
    this.proyectoService.cargar();
  }
}