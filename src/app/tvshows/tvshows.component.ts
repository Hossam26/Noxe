import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
type:any=""
allData:any[]=[]
tvShows:any[]=[]
  constructor(private _DataService:DataService, private _ActivatedRoute:ActivatedRoute) { 
    this._ActivatedRoute.params.subscribe(()=>{
      this.type=_ActivatedRoute.snapshot.paramMap.get("genre")
      _DataService.getData("tv",this.type).subscribe((response)=>{
        this.allData=response.results.filter((item:any)=>{
          return item.poster_path!=null
        })
        this.tvShows=this.allData    
        })
    })
  }

  ngOnInit(): void {
   
  }

}
