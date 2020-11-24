import { Component } from '@angular/core';
import { DatasService } from './datas.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular';
  selectedUser = null;
  searching: boolean = false;

  constructor(
    private _api: DatasService
  ) {}

  /**
   * No data logic in Component!
   * Only trigger service to get datready to use and display
   * All request & formating logic are in angular services.
   * You can use many service chained to formating your data
   * before send to component. 
   * This is one of the most important Angular best practice
   */
  async search(value: string){
    if (!value) return;
    this.searching = true;
    // request service with ID as number
    const user = await this._api.search(+value);
    // bind result data
    this.selectedUser = user;
    this.searching = false;
  }
}
