import { Component, OnInit } from '@angular/core';
import { AsyncHttpService } from '../../provider/async-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private asyncHttpService: AsyncHttpService) { }

  ngOnInit() {
    this.asyncHttpService.get('./assets/data/data.json').subscribe(data => {
      console.log(data);
    });
  }

}
