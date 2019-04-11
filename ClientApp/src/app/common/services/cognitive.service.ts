import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AzureHttpClient } from './azureHttpClient';
import { BingSearchResponse } from '../models/bingSearchResponse';
import { ComputerVisionRequest, ComputerVisionResponse } from '../models/computerVisionResponse';


@Injectable()
export class CognitiveService {
    bingSearchAPIKey = '4e2c132dbd45411e962df156f0d1849b';
    computerVisionAPIKey = '3f442e79411f4325b93c579a2a54d73d';
    constructor(private http: AzureHttpClient) { }
    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        return this.http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' + searchTerm, this.bingSearchAPIKey)
            .map(response => response as BingSearchResponse)
            .catch(this.handleError);
    }
    analyzeImage(request: ComputerVisionRequest): Observable<ComputerVisionResponse> {
// tslint:disable-next-line: max-line-length
    return this.http.post('https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description,Tags', this.computerVisionAPIKey, request)
            .map(response => response as ComputerVisionResponse)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}