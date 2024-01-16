import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('gmapContainer', { static: false }) gmap: ElementRef<any>;
  map: google.maps.Map;
  lat = 22.6709;
  lng = 75.8275;

  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15
  };
  
  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    console.log(this.mapOptions);
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    const trafficLayer = new google.maps.TrafficLayer();

    trafficLayer.setMap(this.map);
    const marker = new google.maps.Marker({position: this.coordinates, map: this.map})
  }
  
}