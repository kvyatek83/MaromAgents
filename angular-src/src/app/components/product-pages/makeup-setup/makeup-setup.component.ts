import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { MakeUp } from '../../../shared/makeupDetails';

@Component({
  selector: 'app-makeup-setup',
  templateUrl: './makeup-setup.component.html',
  styleUrls: ['./makeup-setup.component.css']
})
export class MakeupSetupComponent implements OnInit {

  makeupSettings : MakeUp = {
    Company : null,
    Type : null
  };
  companys : any[] = [
    {name: "לוריאל", image: "https://i.imgur.com/1OmE6e6.jpg"},
    {name: "רבלון", image: "https://i.imgur.com/Gr9hZJC.jpg"},
    {name: "בורזואה", image: "https://i.imgur.com/JSU8JPV.png"},
    {name: "מייבלין", image: "https://i.imgur.com/zO2gvwg.png"},
    {name: "מקס פקטור", image: "https://i.imgur.com/4Pc03Wk.png"}
  ];
  makeupTypes : any[] = [ 
      {name: "שפתיים", image: "https://i.imgur.com/WkbpDXZ.jpg"},
      {name: "עיניים", image: "https://i.imgur.com/fYS06dt.jpg"},
      {name: "פנים", image: "https://i.imgur.com/wz9ALzr.jpg"},
      {name: "כללי", image: "https://i.imgur.com/ZWQTJPx.jpg"}
  ];
  
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeCompany(){
    this.makeupSettings.Company = null;
  }

  selectCompany(selectedCompany : any){
    this.makeupSettings.Company = selectedCompany.name;
  }

  setup(selectedType : any){
    this.makeupSettings.Type = selectedType.name;    
    this.router.navigate(['makeUp', this.makeupSettings]);
  }
}
