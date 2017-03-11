import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
    constructor(private http:Http) {
    }
    addBalance(amount: number) {
        return this.makeRequest(`deposit/${amount}`);
    }
    getBalance(){
        return this.makeRequest(``);
    }

    private makeRequest(path: string) {

        let url = `http://localhost:3001/${ path }`;
        return this.http.get(url)
            .map((res) => res.json());
    }
}