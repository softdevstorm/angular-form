import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatButtonModule} from '@angular/material';
import {UserFormComponent} from './user-form.component';
import {RouterModule} from '@angular/router';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatAutocompleteModule, MatGridListModule, MatCardModule } from '@angular/material';

const COMPONENTS = [
  UserFormComponent,
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
    MatCardModule,
    MatGridListModule,
    NgxMaskModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class UserFormModule {}
