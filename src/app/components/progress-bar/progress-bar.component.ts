import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/shared/loading.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  stopProgress:boolean=false;
  progressValue:number=0;
  progressColor:string="primary";
  progressTimer:number=0;
  constructor(private loadingService:LoadingService){}
  ngOnInit(): void {
    this.loadingService.loading.subscribe(res=>{
      if(res){
        this.progressValue=0;
        this.progressTimer = window.setInterval(() => {
          this.loadingProgress();
        }, 25);
      }else{
        this.stopProgress=true;
      }
    })
  }
  private loadingProgress(){
    if (this.progressValue ==100 || this.stopProgress) {
      console.log(this.stopProgress)
      clearInterval(this.progressTimer); 
    } else {
      console.log(this.stopProgress)
      this.progressValue++;
    }
  }

}
