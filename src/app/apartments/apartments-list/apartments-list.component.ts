import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-apartments-list',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.scss']
})
export class ApartmentsListComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }

  openDetails(link : string){
    this.route.navigateByUrl(link);
  }

}
