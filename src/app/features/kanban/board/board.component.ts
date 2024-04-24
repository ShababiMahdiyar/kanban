import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  items = [
    { value: 'To Do', disabled: false },
    { value: 'In Progress', disabled: false },
    { value: 'Done', disabled: false },
  ];

  // toggleEditMode = () => {
  //   this.items.forEach((element) => {
  //     element.disabled = !element.disabled;
  //   });
  // };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
