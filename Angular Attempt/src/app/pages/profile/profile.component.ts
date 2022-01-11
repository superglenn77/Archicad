import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile {
  rawx1n3: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile - Archicad')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Profile - Archicad',
      },
    ])
  }
}
