import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public title: string = "Exercice 1";
  public imageLink: string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  public name: string;
  
  constructor() { 
    this.name = ``;
  }

  ngOnInit(): void {
  }

}
