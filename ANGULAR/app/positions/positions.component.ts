import { Component, OnInit } from '@angular/core';
import {PositionService} from '../position.service';
import {Position} from '../data/position';
import {Router} from '@angular/router';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
 
  positions:Position[];
  getPositionsSub:any;
  loadingError:boolean;

  constructor(private p:PositionService,private router:Router) { 
    this.getPositionsSub="";
    this.loadingError=false;
  }

  ngOnInit() {
    this.getPositionsSub=this.p.getPosition().subscribe((positions)=>{this.positions=positions;},()=>{
      this.loadingError=true;
    })
  }

  routePosition(id:string)
  {
    this.router.navigate(["/position",id]);
  }
  ngOnDestroy()
  {
    this.getPositionsSub.unsubscribe();
  }
}
