import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people:any[]=[]
  constructor(private _DataService:DataService, private Spinner:NgxSpinnerService) { 
    Spinner.show()
      _DataService.getData("person","popular",1).subscribe((response)=>{
        Spinner.hide()
        this.people=response.results.filter((item:any)=>{
          return item.profile_path!=null
        })
        
    
    })
  }
  ngOnInit(): void {
  }

}
