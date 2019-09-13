import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-theme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() pageName: string;
  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {}
  navigate(path) {
    this.router.navigate([path+'/']);
  }

}
