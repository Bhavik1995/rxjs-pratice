import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private designUtility: DesignUtilityService) { }

  @ViewChild('addButton') addButton!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    let count = 1;
    fromEvent(this.addButton.nativeElement,'click').subscribe(res=>{
      let countVal = 'Video - ' + count++;
      console.log(countVal);
      this.designUtility.print(countVal);
    })
  }
}
