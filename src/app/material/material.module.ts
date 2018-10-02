import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatIconModule,
  MatDividerModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  exports: materialModules
})
export class MaterialModule { }
