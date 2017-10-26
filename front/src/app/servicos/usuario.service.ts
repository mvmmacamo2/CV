import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Usuario} from "../Modelo/Usuario.interface";

@Injectable()
export class UsuuarioService {
    constructor(private http: HttpClient) {

    }

    // Buscar Usuarios
    getUsuarios(): Observable<any> {

        return this.http.get('http://127.0.0.1:8000/api/usuarios');
    }


    saveUsuario(usuario: Usuario): Observable<any> {
        const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
        return this.http.post('http://127.0.0.1:8000/api/usuario', usuario, {headers: headers})
    }


    updateUsuario(id: number, usuario: Usuario) {
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.put('http://127.0.0.1:8000/api/usuario/' + id, usuario, {headers: headers})
    }

    deleteUsuario(id: number) {
        const headers = new HttpHeaders({'Content-type': 'aplication/json'});
        return this.http.delete('http://127.0.0.1:8000/api/usuario' + id);

    }

}