import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss'
})
export class NgSwitchComponent {
  selected = 'apple';
  fruits = ['apple', 'orange', 'banana'];
}
