import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-graficoDona',
    templateUrl: './graficoDona.component.html'
})
export class GraficoDonaComponent implements OnInit {

    @Input() doughnutChartData:any;
    @Input() doughnutChartLabels:any;
    @Input() doughnutChartType:any;
    @Input() leyenda:string;

    constructor() { }

    ngOnInit(): void { }
}
