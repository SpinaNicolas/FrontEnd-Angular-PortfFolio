import { Component, inject, signal } from '@angular/core';
import { SolicitudService } from '../../services/solicitud-service';
import { Solicitud } from '../../models/solicitud';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-solicitudes-list',
  styleUrl: './solicitudes-list.css',
  templateUrl: './solicitudes-list.html',
})
export class SolicitudesList {

  private solicitudService = inject(SolicitudService);

  solicitudes = signal<Solicitud[]>([]);

  ngOnInit(){
    this.cargarSolicitud();
  }

  cargarSolicitud(){
    this.solicitudService.obtenerSolicitudes().subscribe({
      next:(datos) => {
        this.solicitudes.set(datos);
      }
    });
  }

  elimarSolictud(id:string){
    this.solicitudService.eliminarSolicitud(id).subscribe({
      next: () => {
        this.solicitudes.update(solicitud =>
          solicitud.filter(solicitud =>solicitud.id !== id)
        )
      }
    });
  }
}
