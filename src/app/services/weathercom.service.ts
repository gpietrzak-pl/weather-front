import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
    providedIn: 'root'
})
export class WeatherComService {

    private _weather!: BehaviorSubject<Weather[]>;

    private dataStore!: {
        weather: Weather[];
    };

    constructor(private http: HttpClient) {
        this.dataStore = this.dataStore;
        this._weather = new BehaviorSubject<Weather[]>([]);
    }

    get weather(): Observable<Weather[]> {
        return this._weather.asObservable();
    }

    loadAll() {
        //TODO change routing for more services ex: localhost/index.php/{service}/now
        //TODO remove /index.php/ part from url
        const weatherUrl = 'localhost:80/index.php/weathercom/now';

        return this.http.get<Weather[]>(weatherUrl)
            .subscribe(data => {
                this.dataStore.weather = data;
                this._weather.next(Object.assign({}, this.dataStore).weather);
            }, error => {
                console.log(this.dataStore.weather);
            });
    }
}
