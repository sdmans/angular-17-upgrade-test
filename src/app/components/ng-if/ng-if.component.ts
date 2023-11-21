import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
  isHidden = true;

  reveal(): void {
    this.isHidden = false;
  }

  hide(): void {
    this.isHidden = true;
  }

}
