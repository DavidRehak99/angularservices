import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { coche } from "../models/coche";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceCoches{

    constructor(private _http: HttpClient){}

        async getCochesAsync(): Promise<coche[]>{
            let url = environment.urlaApiCoches;
            let request = "/webresources/coches";
            return firstValueFrom(this._http.get<coche[]>(url + request));

        
    }
}