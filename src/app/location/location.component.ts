import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service'
import { Location } from './location.model'
import { Author } from './author.model'

@Component({
  selector: 'app-locations',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public placesList: Location[]
  
  constructor(
    public ls: LocationService
    ) { 
      this.ls.getUserLocations()
      .then(
        r => {
          this.prepareLocations(JSON.parse(r._body))
        },
        err => console.log(err)
      )
      .catch(err => console.log(err))      
    }

  private prepareLocations (m: any[]) {
    this.placesList = m.map(mm => {
      const x = new Location()
      x.name = mm.name
      x.id = mm._id
      if (mm.author && mm.author._id) {
        x.author = new Author()
        x.author.id = mm.author._id
        x.author.email = mm.author.email
      }
      x.longitude = mm.longitude
      x.latitude = mm.latitude
      x.category = mm.category
      x.dateAdded = mm.dateAdded
      x.entry_type = mm.entry_type
      x.tags = mm.tags
      return x
    })
  }

  ngOnInit() {
  }

}
