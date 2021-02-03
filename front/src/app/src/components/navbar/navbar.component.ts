import { Component, OnInit, VERSION } from '@angular/core';
import { take, tap } from 'rxjs/operators';

import { ProductService } from 'src/shared/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  angularVersion = VERSION;
  constructor() {
  }

  ngOnInit(): void {
  }
}
