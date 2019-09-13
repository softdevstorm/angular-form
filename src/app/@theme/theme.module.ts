import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatButtonModule} from '@angular/material';
import {HeaderComponent} from './components';
import {RouterModule} from '@angular/router';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatAutocompleteModule } from '@angular/material';

const COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ThemeModule {}
