import { Component,Input,OnInit } from '@angular/core';
import { service } from 'src/app/models/models';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  services:service[] = [  {id:1,title:"People and their family", image: "home_1.svg",description_1:"Positive experience of care",
  description_2:"Accessible and seamless care", description_3:"Excellent outcomes"},
  {id:2,title:"Healthcare professionals", image: "home_2.svg", description_1:"Safe and supported care", description_2:"Productive work", description_3:"Supported Best Practices"},
  {id:3,title:"Healthcare social and life sciences", image: "home_3.svg", description_1:"Productive resource use", description_2:" Safe and consistent care", description_3:" Patient & starff satisfaction"}
 ]
  /*
  constructor(private hs:HomeService) {}
  ngOnInit(): void {
      this.hs.getServices().subscribe(
         {
           next: (data:service[]) => this.services = data,
           error: (error:any) => this.services = []
         }
      )
  } */
}
