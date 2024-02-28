import { Component } from '@angular/core';
import { TableComponent } from '../../components/tableComponents/table/table.component';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  tableCols = [
    { lable: 'process', colData: 'process' },
    { lable: 'doneBy', colData: 'doneBy' },
    { lable: 'createdAt', colData: 'createdAt' },
    { lable: 'updatedAt', colData: 'updatedAt' }
  ];
  logs: any[] = [{
    process: "Deleted 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt:  "2024-02-25T20:24:28.731Z",
    updatedAt:"2024-02-25T20:24:28.731Z"
  },
  {
    
    process: "Deleted 65dba355c1daf2254404acfd",
    doneBy: "jessica",
    createdAt:  "2024-02-25T20:30:13.879Z",
    updatedAt:  "2024-02-25T20:30:13.879Z"
   
  },
  {
   
    process: "Updated Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt: "2024-02-25T20:34:40.026Z"
  
    ,updatedAt: "2024-02-25T20:34:40.026Z"
    
  },
  {
    
    process: "Updated Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt:  "2024-02-25T20:35:10.842Z"
    ,
    updatedAt:"2024-02-25T20:35:10.842Z"
  
  },
  {
    process: "Deleted Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt: "2024-02-25T20:37:36.506Z",
    updatedAt:"2024-02-25T20:37:36.506Z"
    ,
  },
  {
    
    process: "Updated Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt:  "2024-02-25T20:35:10.842Z"
    ,
    updatedAt:"2024-02-25T20:35:10.842Z"
  
  },
  {
    process: "Deleted Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt: "2024-02-25T20:37:36.506Z",
    updatedAt:"2024-02-25T20:37:36.506Z"
    ,
  },
  {
    
    process: "Updated Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt:  "2024-02-25T20:35:10.842Z"
    ,
    updatedAt:"2024-02-25T20:35:10.842Z"
  
  },
  {
    process: "Deleted Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt: "2024-02-25T20:37:36.506Z",
    updatedAt:"2024-02-25T20:37:36.506Z"
    ,
  },
  {
    
    process: "Updated Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt:  "2024-02-25T20:35:10.842Z"
    ,
    updatedAt:"2024-02-25T20:35:10.842Z"
  
  },
  {
    process: "Deleted Admin 65dba1fcee43a3b480fd13ba",
    doneBy: "jessica",
    createdAt: "2024-02-25T20:37:36.506Z",
    updatedAt:"2024-02-25T20:37:36.506Z"
    ,
  }]
}
