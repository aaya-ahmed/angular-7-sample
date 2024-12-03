import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export  class CachService {
  private cacheMap=new Map<string,any>()
  public cache:BehaviorSubject<any> =new BehaviorSubject<any>(null);
  constructor() { }
  set(key:string,data:any){
    if(this.cacheMap.has(key)){
      this.cacheMap.delete(key);
    }
      this.cacheMap.set(key, data);
      this.cache.next(this.cacheMap.get(key));
  }
  isPublishData(key:string):boolean{
    if(this.cacheMap.has(key)){
      this.cache.next(this.cacheMap.get(key));
      return true
    }
    else{
      this.cache.next(null);
      return false
    }
  }

}
