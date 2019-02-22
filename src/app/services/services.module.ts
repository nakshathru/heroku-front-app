import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IssueService} from './issue.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
        IssueService
  ]
})
export class ServicesModule { }
