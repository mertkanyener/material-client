import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-client';

  links = [
    'Account',
    'Feed',
    'Events',
    'Artists',
    'Venues'
  ];
}
