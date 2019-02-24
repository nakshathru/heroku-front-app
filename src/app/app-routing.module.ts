import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

const routes: Routes = [
 
  
  { path: 'list', component: ListComponent },
  { path: '', component:ListComponent},
  {path: 'details', component: SongDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
