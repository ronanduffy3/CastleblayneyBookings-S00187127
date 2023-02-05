import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/shared/services/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties: any[];

  constructor(private propertyService: PropertiesService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties
    });
    console.log(this.properties, "undefined error");
  }

}
