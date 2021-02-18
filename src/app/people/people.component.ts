import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people:any[]=[]
  constructor(private _DataService:DataService) { 
    
      _DataService.getData("person","popular").subscribe((response)=>{
        this.people=response.results.filter((item:any)=>{
          return item.profile_path!=null
        })
        
    
    })
  }
  ngOnInit(): void {
  }

}
