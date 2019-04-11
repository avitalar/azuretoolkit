import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AzureHttpClient {
    constructor(private http: HttpClient) {}
    get(url: string, apiKey: string) {

        let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Content-Type', 'application/json');
headers = headers.append('Ocp-Apim-Subscription-Key', apiKey);

    // const httpOptions  = new HttpHeaders();
    // httpOptions.append('Ocp-Apim-Subscription-Key', apiKey);
        return this.http.get(url, {
            headers: headers
        });
    }
    post(url, apiKey, data) {
        const headers = new HttpHeaders();
        headers.append('Ocp-Apim-Subscription-Key', apiKey);
        return this.http.post(url, data, {
            headers: headers
        });
    }
    }