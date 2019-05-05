import { Component } from '@angular/core';

//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-root',  // the component's CSS element selector , matches the name of the HTML element that identifies this component within a parent component's template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
