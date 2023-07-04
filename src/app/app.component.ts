import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from './services/design-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <ngx-loading-bar></ngx-loading-bar>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-pratice';

  exclusive?: boolean;

  constructor(private designUtlity: DesignUtilityService) {}

  ngOnInit(){
    this.designUtlity.exclusive.subscribe(res =>{
      this.exclusive = res;
    })
  }

}
