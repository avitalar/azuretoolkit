import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

 @Injectable()
 export class AzureToolkitService {
     private originUrl: string;

     constructor(private http: HttpClient) {
        // this.originUrl = originUrl;
     }

     public saveImage(imagePostRequest: { url: string, id: string, encodingFormat: string}): Observable<boolean> {
        return this.http.post('https://avitalazure.azurewebsites.net/api/images', imagePostRequest)
            .map(response => {
                return response.ok;
            }).catch(this.handleError);
    }

     private handleError(error: any): Promise<any> {
         console.error('An error occurred', error); // for demo purposes only
         return Promise.reject(error.message || error);
     }
 }