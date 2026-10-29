import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { Observable } from 'rxjs';
import { PassThrough } from 'stream';

@Service()
export class SolicitudService {

    private http = inject (HttpClient);
    private url = 'http://localhost:3001/solicitudes';

    obtenerSolicitudes(): Observable<Solicitud[]>{
        return this.http.get<Solicitud[]>(this.url);
    }

    obtenerSolicitud(id: string): Observable<Solicitud>{
        return this.http.get<Solicitud>(`${this.url}/${id}`);
    }

    crearSolicitud(solicitud : Solicitud):Observable<Solicitud>{
        return this.http.post<Solicitud>(this.url,solicitud);
    }

    editarSolicitud(id :String , solicitud:Solicitud):Observable<Solicitud>{
        return this.http.put<Solicitud>(`${this.url}/${id}`,solicitud);
    }

    eliminarSolicitud(id:String):Observable<void>{
        return this.http.delete<void>(`${this.url}/${id}`);
    }


}
