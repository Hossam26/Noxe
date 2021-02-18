import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
type:any=""
allData:any[]=[]
tvShows:any[]=[]
  constructor(private _DataService:DataService, private _ActivatedRoute:ActivatedRoute, private Spinner:NgxSpinnerService) { 
    this._ActivatedRoute.params.subscribe(()=>{
      this.type=_ActivatedRoute.snapshot.paramMap.get("genre")
    Spinner.show()  
      _DataService.getData("tv",this.type).subscribe((response)=>{
        Spinner.hide()
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
