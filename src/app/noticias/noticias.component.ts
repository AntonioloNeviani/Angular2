import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: Array<any>;
  constructor() { 
    this.noticias = [{
      Nombre:"Titulo 1",
      Descripccion:"Descripccion 1",
      Autor:"Autor 1"
    },{
      Nombre:"Titulo 2",
      Descripccion:"Descripccion 2",
      Autor:"Autor 2"
    },{
      Nombre:"Titulo 3",
      Descripccion:"Descripccion 3",
      Autor:"Autor 3"
    }]
  }

  ngOnInit() {
  }

}
