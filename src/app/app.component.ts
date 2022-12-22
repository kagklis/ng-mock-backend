import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Panda } from './model/panda';
import { PandaService } from './services/panda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pandas$: Observable<Panda[]>;

  constructor(pandaService: PandaService) {
    this.pandas$ = pandaService.getPandas();
  }
}
