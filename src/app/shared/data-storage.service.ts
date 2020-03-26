import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// {providedIn: 'root'} is the new shortcut so this doesn't have to be registered in app.module
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient) {}

    
}
