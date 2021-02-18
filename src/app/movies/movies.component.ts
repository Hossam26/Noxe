import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  type:any=""
  Movies:any[]=[]
    constructor(private _DataService:DataService, private _ActivatedRoute:ActivatedRoute) { 
      this._ActivatedRoute.params.subscribe(()=>{
        this.type=_ActivatedRoute.snapshot.paramMap.get("genre")
        _DataService.getData("movie",this.type).subscribe((response)=>{
          this.Movies=response.results.filter((item:any)=>{
            return item.poster_path!=null
          })
          
        })
      })
    }
  ngOnInit(): void {
  }

}
