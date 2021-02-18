import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Noxe';
  ngOnInit(): void {
    window.addEventListener("beforeunload",function(){
      localStorage.removeItem("token")
    })
  }

}
