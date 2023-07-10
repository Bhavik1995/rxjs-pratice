import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})
export class SwitchMapSearchComponent implements OnInit {

  @ViewChild('searchForm') searchForm?: NgForm
  constructor() { }

  ngOnInit(): void {
  }

}
