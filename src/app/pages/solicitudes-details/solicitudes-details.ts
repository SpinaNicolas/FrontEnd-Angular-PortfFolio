import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from '../../services/solicitud-service';

@Component({
  imports: [RouterLink],
  selector: 'app-solicitudes-details',
  styleUrl: './solicitudes-details.css',
  templateUrl: './solicitudes-details.html',
})
export class SolicitudesDetails implements OnInit {

  private solicitudService = inject(SolicitudService);
  private route = inject(ActivatedRoute);

  solicitud = signal<Solicitud | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.solicitudService.obtenerSolicitud(id).subscribe({
        next: (data) => {
          this.solicitud.set(data);
        },
        error: (error) => {
          console.error('Error al cargar la solicitud:', error);
        }
      });
    }
  }
}
