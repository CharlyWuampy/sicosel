import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../../servicios/generales/generales.service';
import { Generales } from '../../modelos/generales/generales.interfaces';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.css']
})
export class GeneralesComponent implements OnInit {
  generales: Generales[] = [];
  constructor(private generalesSer: GeneralesService) { }

  ngOnInit(): void {
    

  }
  guardar() {
    //const newGenerales = { nombre: 'charly Wumapy' }
   // this.generalesSer.addNewSentenciado(newGenerales).subscribe(sentenciado => this.generales.push(sentenciado)); 
  }
}
