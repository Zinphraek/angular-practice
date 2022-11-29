import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './start.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-spaces.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ConvertToSpacePipe,
    StarComponent
  ]
})
export class SharedModule { }
