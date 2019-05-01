import { Component, OnInit } from '@angular/core';
import {PositionService} from '../position.service';
import {Position} from '../data/position';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
 
  positions:Position[];
  getPositionsSub:any;
  loadingError:boolean;

  constructor(private p:PositionService) { 
    this.getPositionsSub="";
    this.loadingError=false;
  }

  ngOnInit() {
    this.getPositionsSub=this.p.getPosition().subscribe((positions)=>{this.positions=positions;},()=>{
      this.loadingError=true;
    })
  }

  ngOnDestroy()
  {
    this.getPositionsSub.unsubscribe();
  }
}
