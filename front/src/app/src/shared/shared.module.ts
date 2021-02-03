import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './services/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
  ],
  exports: [
    FormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    ProductService,
    FormBuilder,
  ],
})
export class SharedModule { }
