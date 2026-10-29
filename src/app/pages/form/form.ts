import { Component, inject, OnInit, signal } from '@angular/core';
import { SolicitudService } from '../../services/solicitud-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from '../../models/solicitud';
import { email, form, required, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form implements OnInit{

  private solicitudService =inject(SolicitudService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  id = this.route.snapshot.paramMap.get('id');

   solicitudModel = signal<Solicitud>({

    nombreSolicitante:'',
    email:'',
    tipoProyecto:'',
    descripcion:'',
    presupuesto:0,
    fecha: '',
  });


  solicitudesForm = form(this.solicitudModel, (campo) => {
    required(campo.descripcion);
    required(campo.email);
    email(campo.email);

    required(campo.fecha);
    required(campo.nombreSolicitante);
    required(campo.presupuesto);
    required(campo.tipoProyecto);
    
  })

  ngOnInit() {
    if(this.id){
      this.solicitudService.obtenerSolicitud(this.id).subscribe({
        next: (solicitud) =>{
          this.solicitudModel.set(solicitud);
        },
        error: (error) => {
          console.error('Error al obtener la solicitud:', error);
        }
      });
    }
  }

  onSubmit(){
    if(this.solicitudesForm().invalid()){
      return;
    }

    const solicitud = this.solicitudModel();

    if(this.id){
      this.solicitudService.editarSolicitud(this.id,solicitud).subscribe({
        next:(respuesta) => {
          console.log ('Solicitud editada correctamente:',respuesta);
          this.router.navigate(['/solicitudes']);
        },
        error:(error) =>{
          console.error('Error al editar la persona',error);
        }
      });
    }else{
      this.solicitudService.crearSolicitud(solicitud).subscribe({
        next: (respuesta) =>{
          console.log('Solicitud creada correctamente:',respuesta);
          this,this.router.navigate(['/solicitudes'])
        },
        error:(error) => {
          console.error('Error al crear una Solicitud:', error)
        }
      })
    }
  }
}
