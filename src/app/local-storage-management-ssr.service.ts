import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagementSsrService {
  isBrowser!:any;
  storage!:any;
  constructor(@Inject(PLATFORM_ID) private platFormId : Object) { 
    this.isBrowser =  isPlatformBrowser(this.platFormId);
    if (this.isBrowser) {
      this.storage = localStorage;
    }
  }
  clear(): void {
    if(this.isBrowser){
      this.storage.clear();
    }
  }

  getItem(key: string): string | null {
    if(this.isBrowser){
      return this.storage.getItem(key);
    }
  }

  key(index: number): string | null {
    if(this.isBrowser){
      return this.storage.key(index);
    }
  }

  removeItem(key: string): void {
    if(this.isBrowser){
      return this.storage.removeItem(key);
    }
  }

  setItem(key: string, value: string): void {
    if(this.isBrowser){
     return this.storage.setItem(key, value);
    }
  }
}
