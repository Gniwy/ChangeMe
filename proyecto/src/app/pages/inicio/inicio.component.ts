import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  sliders : any

  constructor(
    private bbddService : BbddService
  ) { 
    this.sliders = this.bbddService.sliders;
  }

  ngOnInit(): void {
  }

}
