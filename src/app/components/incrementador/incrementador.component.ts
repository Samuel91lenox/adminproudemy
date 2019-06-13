import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda:string='Leyenda';
  @Input() progreso:number=50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtPogress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public onChange(newValue:number){

    // let elemeHTML:any = document.getElementsByName('progreso')[0];

    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso=newValue;
    }

    // elemeHTML.value = Number(this.progreso);
    this.txtPogress.nativeElement.value = this.progreso;
    
    this.cambioValor.emit(this.progreso);

    this.txtPogress.nativeElement.focus();
  }

  public cambiarValor(valor){
    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }

}
