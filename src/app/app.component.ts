import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = ['欄位一', '欄位二'];
  values = [
    { name: 1, id: '123' ,commend:()=>{console.log('object')}},
    { name: 12, id: '123' },
    { name: 13, id: '123' },
    { name: 14, id: '123' }
  ]
}
