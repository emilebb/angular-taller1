import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie'; 

const BASE_URL = 'https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json';

@Injectable({
    providedIn: 'root'
})
export class SerieService{
    constructor(private http: HttpClient){}

    getSeries(): Observable<Serie[]>{
        return this.http.get<Serie[]>(BASE_URL);
    }

}