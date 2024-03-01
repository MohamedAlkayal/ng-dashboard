import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableComponent } from '../../components/tableComponents/table/table.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule,TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
    constructor() {
      this.dataBar = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {  
                 label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40]
              }
          ]
      }
      this.dataPie = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {  
               label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    }
    this.dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {  
             label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {  
            label: 'Second Dataset',
             data: [50, 40, 60, 70, 80,60, 56]
         }
      ]
  }
      
      this.options = {
          title: {
              display: true,
              text: 'My Title',
              fontSize: 16
          },
          legend: {
              position: 'bottom'
          }
      };
  }
    
  dataBar: any;
  dataPie: any;
  dataLine: any;
  options: any;
  topUsers:any[]=[]


  tableCols = [
    { lable: 'Top Users', colData: 'Top Users' },
  ];



}

