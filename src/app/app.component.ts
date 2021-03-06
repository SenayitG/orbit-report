import { Component } from '@angular/core';
import { Satellite } from './satellite'
import { SourceListMap } from 'source-list-map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// @Input() let satellites: Satellite[];



export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[] = [];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          for (let i = 0; i < fetchedSatellites.length; i++){
            let newSatellite = new Satellite (fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational)
            this.sourceList.push(newSatellite)
          }
          export class AppComponent {
            title = 'orbit-report';
            sourceList: Satellite[] = [];
          
            constructor() {
              this.sourceList = [];
              let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
           
              window.fetch(satellitesUrl).then(function(response) {
                 response.json().then(function(data) {
           
                    let fetchedSatellites = data.satellites;
                    for (let i = 0; i < fetchedSatellites.length; i++){
                      let newSatellite = new Satellite (fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational)
                      this.sourceList.push(newSatellite)
                    }
                    let search(searchTerm: string): void {
                      let matchingSatellites: Satellite[] = [];
                      searchTerm = searchTerm.toLowerCase();
                      for(let i=0; i < this.sourceList.length; i++) {
                         let name = this.sourceList[i].name.toLowerCase();
                         if (name.indexOf(searchTerm) >= 0) {
                            matchingSatellites.push(this.sourceList[i]);
                         }
                      }
                      // assign this.displayList to be the the array of matching satellites
                      // this will cause Angular to re-make the table, but now only containing matches
                      this.displayList = matchingSatellites;
                   }
          
          
          
                 }.bind(this));
              }.bind(this));
              
           }
          
          
          }
          
          


       }.bind(this));
    }.bind(this));
    
 }


}



