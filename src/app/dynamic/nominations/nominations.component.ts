import { NominationService } from './../service/nomination.service';
import { Component, OnInit } from '@angular/core';
// import { NominationService } from './NominationService';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.css']
})
export class NominationsComponent implements OnInit {

  data;
  count: number;
  C3: number = 0;
  C4: number = 0;
  C5: number = 0;
  L: number = 0 ;
  S: number = 0;

  constructor( private nominationService: NominationService) { }

  ngOnInit() {
    this.data = this.nominationService.getDatas().results;
    this.count = this.nominationService.getDatas().count; 
    
    for(let i=0; i<this.data.length; i++){
      if(this.data[i].product === 'C3'){
        this.C3 += 1;
      } else if(this.data[i].product === 'C4'){
        this.C4 += 1;
      } else if(this.data[i].product === 'C5'){
        this.C5 += 1;
      } else if(this.data[i].product === 'L'){
        this.L += 1;
      } else if(this.data[i].product === 'S'){
        this.S += 1;
      }
    }    
  }

}
