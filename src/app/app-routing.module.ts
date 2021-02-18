import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'about',component:AboutComponent},
  {path:'movies/:genre',component:MoviesComponent,canActivate:[AuthGuardService]},
  {path:'tvshows/:genre',component:TvshowsComponent,canActivate:[AuthGuardService]},
  {path:'details/:mediaType/:id',component:DetailsComponent,canActivate:[AuthGuardService]},
  {path:'search/:target',component:SearchComponent,canActivate:[AuthGuardService]},
  {path:'people',component:PeopleComponent,canActivate:[AuthGuardService]},
  {path:'networks',component:NetworksComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
