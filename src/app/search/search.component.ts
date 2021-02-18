import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
target:any=""
allData:any[]=[]
constructor(private _DataService:DataService, private _ActivatedRoute:ActivatedRoute) { 
  this._ActivatedRoute.params.subscribe(()=>{
    this.target=_ActivatedRoute.snapshot.paramMap.get("target")
    _DataService.search(this.target).subscribe((response)=>{
      this.allData=response.results.filter((item:any)=>{
        return item.poster_path!=null
      })
      this.allData=this.allData.filter((item:any)=>{
        return item.media_type!=null
      })
    })
  })
}
  ngOnInit(): void {
  }

}
