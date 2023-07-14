import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private ElectronService: ElectronService) {
    console.log("constructor loaded");
    this.ElectronService.ipcRenderer.on('databaseData', (event, data) => {
      localStorage.setItem('data', JSON.stringify(data));
    });

    this.ElectronService.ipcRenderer.on('sendDataBackToElectron', (event) => {
      const data = localStorage.getItem('data');
      event.returnValue = JSON.parse(data);
      // this.ElectronService.ipcRenderer.send('dataFromAngular', JSON.parse(data));
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.ElectronService.ipcRenderer.send('closeApp');
  }
}
