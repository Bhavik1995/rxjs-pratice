import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }


  print(val: any){
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById('elContainer')?.appendChild(el)
  }
}
