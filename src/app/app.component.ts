import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <ngx-loading-bar></ngx-loading-bar>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-pratice';
}
