import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipePurePipe } from './pipes/custom-pipe-pure.pipe';
import { CustomPipeImpurePipe } from './pipes/custom-pipe-impure.pipe';
import { FilterPipeImpurePipe } from './pipes/filter-pipe-impure.pipe';
import { FilterPipePurePipe } from './pipes/filter-pipe-pure.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePurePipe,
    CustomPipeImpurePipe,
    FilterPipeImpurePipe,
    FilterPipePurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
