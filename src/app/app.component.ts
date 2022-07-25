import { Component, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LocalStorageManagementSsrService } from './local-storage-management-ssr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';
  isBrowser: boolean;
  constructor(private localStorage: LocalStorageManagementSsrService){}
  ngOnInit() {
  //  this.isBrowser =  isPlatformBrowser(this.platFormId);
  //  if(this.isBrowser){
  //   console.log(Document);
  //   // localStorage.setItem('test', 'Test value1')
  //   // this.getLocation();
  //  }else{
  //    console.log('server side')
  //  }
  

    // this.getLocation();
    this.localStorage.setItem('newItem', 'New Item 1')  

  }
  getLocation(): void{
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
        //  this.callApi(longitude, latitude);
        console.log(`long is : ${longitude} with lat is : ${latitude}`);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

}
