import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swimlane',
  templateUrl: './swimlane.component.html',
  styleUrl: './swimlane.component.scss',
})
export class SwimlaneComponent {
  @Input() laneName?: string;
}
