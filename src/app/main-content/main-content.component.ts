import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

import { YahooService } from '../services/yahoo.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styles: ['./main.content.component.scss']
})
export class MainContentComponent implements OnInit {

  weather!: Observable<Weather[]>;

  //TODO should use GlobalService which uses yahooservice or other
  constructor(
    private yahooService: YahooService) { }

  ngOnInit(): void {
    this.weather = this.yahooService.weather;
    this.yahooService.loadAll();

    this.weather.subscribe(data => {
      console.log(data);
    })
  }
}
