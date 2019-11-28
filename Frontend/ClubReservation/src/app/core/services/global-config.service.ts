
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GlobalConfigService {
    private _apiBaseUrl: string = null;
    public allSettings: any = null;

    public get apiBaseUrl() {
        if (this._apiBaseUrl == null) {
            throw new Error('Api base not set, cannot continue.');
        }

        return this._apiBaseUrl;
    }
    constructor(private http: HttpClient) {}

    load(): Promise<GlobalConfigService> {
        return this.http.get('assets/config/config.json?r=' + Math.random()).pipe(map((v: any) => {
            this._apiBaseUrl = v.apiBaseUrl;
            this.allSettings = v;
            return this;
        })).toPromise();
    }
}
