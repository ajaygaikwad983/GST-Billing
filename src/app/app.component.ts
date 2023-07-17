import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private ElectronService: ElectronService) {
    console.log('constructor loaded');
    this.ElectronService.ipcRenderer.on('databaseData', (event, data) => {
      localStorage.setItem('data', JSON.stringify(data));
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
