import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Bhavik');

  videEmit = new ReplaySubject<string>(5,5000);

  constructor() { }


  print(val: any,container: string){
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(container)?.appendChild(el)
  }
}
