import { Component, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platFormId : Object){}
  ngOnInit() {
   this.isBrowser =  isPlatformBrowser(this.platFormId);
   if(this.isBrowser){
    console.log(Document);
    this.getLocation();
   }else{
     console.log('server side')
   }
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
