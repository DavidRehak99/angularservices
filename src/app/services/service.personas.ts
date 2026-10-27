import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../Global";
import { environment } from "../../environments/environment.development";


@Injectable()
export class ServicePersonas{
    constructor(private _http: HttpClient) {}

    getPersonas(): Observable<any>{

        let urlApi = environment.urlaApiPersonas;
       return this._http.get(urlApi);
    }

    getPersonasPromise(): Promise<any>{

    
    let promise = new Promise((resolve) => {
        this._http.get(Global.urlaApiPersonas).subscribe((response) => {
            resolve(response);
        })
    })
    return promise;


    }
    async getPersonasAsync(): Promise<Persona[]>{

        
        return firstValueFrom(this._http.get<Persona[]>(Global.urlaApiPersonas));
    }

}