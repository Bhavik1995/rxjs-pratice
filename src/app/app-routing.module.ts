import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplySubjectComponent } from './observable/reply-subject/reply-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './observable/switch-map-search/switch-map-search.component';

const routes: Routes = [
  {
    path: 'promise', component: PromiseComponent
  },

  {
    path: 'observable', component: ObservableComponent,
    children:[
      {
        path: '', component: ListComponent
      },
      {
        path: 'fromEvent', component: FromEventComponent
      },
      {
        path: 'interval', component: IntervalComponent
      },
      {
        path: 'of-from', component: OfFromComponent
      },
      {
        path: 'to-array', component: ToArrayComponent
      },
      {
        path: 'custom', component: CustomComponent
      },
      {
        path: 'map', component: MapComponent
      },
      {
        path: 'pluck', component: PluckComponent
      },
      {
        path: 'filter', component: FilterComponent
      },
      {
        path: 'tap', component: TapComponent
      },
      {
        path: 'take', component: TakeComponent
      },
      {
        path: 'retry', component: RetryComponent
      },
      {
        path: 'debouncetime', component: DebouncetimeComponent
      },
      {
        path: 'subject', component: SubjectComponent
      },
      {
        path: 'reply-subject', component: ReplySubjectComponent
      },
      {
        path: 'async-subject', component: AsyncSubjectComponent
      },
      {
        path: 'concat', component: ConcatComponent
      },
      {
        path: 'merge', component: MergeComponent
      },
      {
        path: 'merge-map', component: MergeMapComponent
      },
      {
        path: 'concat-map', component: ConcatMapComponent
      },
      {
        path: 'switch-map', component: SwitchMapComponent
      },
      {
        path: 'switch-map-search', component: SwitchMapSearchComponent
      }
    ]
  },

  {
    path: '**', redirectTo: 'promise'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
