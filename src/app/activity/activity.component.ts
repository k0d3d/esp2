import { Component, OnInit } from '@angular/core';
import { ActivityService } from './activity.service'

import { Activity } from './activity.model'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  protected dataAct: Activity[]
  
  constructor(public service: ActivityService) { 
    this.service.getUserActivities()
    .then(
      r => {
        this.prepareActivities(JSON.parse(r._body))
        
      },
      err => console.log(err)
    )
    .catch(err => console.log(err))
  }
  
  private prepareActivities (m: any[]) {
    this.dataAct = m.map(mm => {
      const x = new Activity()
      x.questionPrompt = mm.questions
      x.timeUpdated = mm.timeUpdated 
      x.decision = mm.decision
      x.dateTriggered = mm.dateTriggered
      x.locationData = mm.locationId
      x.checkInTime = mm.checkInId.checkInTime
      x.checkInId = mm.checkInId._id
      x.hasComment = mm.hasComment
      return x
    })
  }

  ngOnInit() {
  }

}
