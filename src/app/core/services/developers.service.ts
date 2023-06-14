import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of, tap } from "rxjs";
import { Developer } from "../models/developer.model";

@Injectable({ providedIn: 'root' })
export class DevelopersService {
    url = 'http://localhost:8800/developers';
    constructor(private readonly http: HttpClient) { }

    getAll(): Observable<Developer[]> {
        return this.http
            .get<{ developers: Developer[] }>(`${this.url}`)
            .pipe(
                catchError((error) => {
                    console.log(error)
                    return []
                }),
                tap(_ => console.log('Developers')),
                map(data => data.developers))
    }

    searchDeveloper(term: string): Observable<Developer[]> {
        return this.http
            .get<{ developers: Developer[] }>(`${this.url}?search=${term}`)
            .pipe(
                tap(_ => console.log('Search developers')),
                map(data => data.developers)
            )
    }
}