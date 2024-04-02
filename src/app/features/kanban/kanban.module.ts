import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardComponent } from './board/board.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [BoardComponent, TasksListComponent],
  imports: [CommonModule, KanbanRoutingModule],
})
export class KanbanModule {}
