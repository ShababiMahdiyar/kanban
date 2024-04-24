import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardComponent } from './board/board.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { SwimlaneComponent } from './swimlane/swimlane.component';

@NgModule({
  declarations: [BoardComponent, SwimlaneComponent, TasksListComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    CdkDropList,
    CdkDrag,
    MatCardModule,
  ],
})
export class KanbanModule {}
