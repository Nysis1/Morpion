import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatCarousel,
  MatCarouselComponent,
} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  breakpoint: number;
  slides = [
    {
      image: '../../../assets/morpion.jpg',
    },
    {
      image: '../../../assets/gameboardbg.jpg',
    },
    {
      image: '../../../assets/gameboardbg2.jpg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    switch (true) {
      case window.innerWidth < 600:
        this.breakpoint = 1;
        break;
      case window.innerWidth < 960:
        this.breakpoint = 2;
        break;
      case window.innerWidth < 1280:
        this.breakpoint = 3;
        break;
      case window.innerWidth < 1920:
        this.breakpoint = 3;
        break;
      default:
        this.breakpoint = 4;
    }
  }

  btnClick(route: string) {
    this.router.navigateByUrl(route);
  }

  onResize(event: any) {
    switch (true) {
      case event.target.innerWidth < 600:
        this.breakpoint = 1;
        break;
      case event.target.innerWidth < 960:
        this.breakpoint = 2;
        break;
      case event.target.innerWidth < 1280:
        this.breakpoint = 3;
        break;
      case event.target.innerWidth < 1920:
        this.breakpoint = 3;
        break;
      default:
        this.breakpoint = 4;
    }
  }
}
