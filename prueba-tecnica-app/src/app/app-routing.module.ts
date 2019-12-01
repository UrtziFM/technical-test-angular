import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormComponent } from './components/edit-form/edit-form.component';
import { NewFormComponent } from './components/new-form/new-form.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'new', component: NewFormComponent },
  { path: 'edit/:id', component: EditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
