import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';

  
  homeContent =[
    {
      title:"About",
      description:"At Dedalus, every day we do something special by helping caregivers and health professionals deliver better care to their served communities. See their stories, understand how we helped them achieve valuable results for professionals, patients, communities."
    },
    {
      title:"Company",
      description:"Living a healthy life is a basic human need.  Research shows that health care services are only one of a range of factors affecting peoples’ health.  As multiple research reports show, an individual’s health behaviours and physical environment are the key drivers, with health services themselves only influencing 10% to 20% of health outcomes."
    },
    {
      title:"Services",
      description:"The new Dedalus #Ways approach allows us to bring value to all the actors involved in the Healthcare ecosystem, creating a unique flow of information that ensures the best outcomes in each phase."
    }
  ];
}
