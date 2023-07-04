import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Bhavik');

  constructor() { }


  print(val: any,container: string){
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(container)?.appendChild(el)
  }
}
