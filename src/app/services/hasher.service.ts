import { Injectable } from '@angular/core';

@Injectable()
export class HasherService {

  constructor() { }

  hashCode(string: string): number {
    let hash = 0;
    if (string.length == 0) return hash;
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }


}
