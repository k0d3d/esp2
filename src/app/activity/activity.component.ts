import { Component, OnInit } from '@angular/core';
import { ActivityService } from './activity.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  protected dataAct: any[]
  
  constructor(public service: ActivityService) { 
    this.service.getUserActivities()
    .subscribe(
      r => {
        this.dataAct = r
        this.prepareActivities()
        
      }
    )
  }
  
  private prepareActivities () {
    console.log(this.dataAct)
  }

  ngOnInit() {
  }

}
