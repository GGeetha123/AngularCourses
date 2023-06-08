import { Component,Input } from '@angular/core';
import { ThemeProps } from '../types';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent {
  @Input("ftheme") footertheme:ThemeProps={backgroundColor:"",color:""}
  //fttheme is alias name
}
