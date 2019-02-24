import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {

  song:any;
  

}
@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  danceability:any;
  constructor(
    public dialogRef: MatDialogRef<SongDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
    
   if(this.data.song.danceability>=0.8){
     this.danceability="Very High";
   }
   else if(this.data.song.danceability>=0.6){
     this.danceability="High";
   }
   else if(this.data.song.danceability>=0.4){
     this.danceability="Good";
   }

   else if (this.data.song.danceability>=0.2){
     this.danceability="Average";
   }
   else 
   this.danceability="Poor";
    
  }

  fixTime(Intime){

    var minute = Math.floor(Intime/60000);  
    var second = Intime % 60;
    return minute + ":" + second;  
  }
}
