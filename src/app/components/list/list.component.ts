import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song } from '../../models/issue.model';
import { IssueService } from '../../services/issue.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SongDetailsComponent } from '../song-details/song-details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  searchMode:Boolean=true;
  searchId:String;
  searchSong: Song[];
  songs: Song[];
  selectSort:any;
  sorts=['name','artists','rank'];

  constructor(private issueService: IssueService, private router: Router,public dialog: MatDialog) { }

  ngOnInit() {
    this.fetchIssues();
    
  }

  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Song[]) => {
      this.songs = data;
      
      
    });
  }

  searchDb(){

    this.issueService.getIssueById(this.searchId).subscribe((res:Song[])=> {
     this.searchSong = res;
      console.log(res);
      

    });

    this.searchMode=false;

  }
  goBack(){
    this.searchMode=true;
  }

  openDialog(song): void {
   
    
    
    const dialogRef = this.dialog.open(SongDetailsComponent, {
      width: '40%',
      data: {song: song }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });

  }

  sortId(){
    console.log(this.selectSort);

    
    this.issueService.sortIssueById(this.selectSort).subscribe((res:Song[])=> {

      this.songs = res;
       console.log(res);
       
 
     });
    
  }

  fixTime(Intime){

    var minute = Math.floor(Intime/60000);  
    var second = Intime % 60;
    return minute + ":" + second;  
  }

}
  
