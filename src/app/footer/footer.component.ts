import { Component, OnInit, OnDestroy } from '@angular/core';
import {CarosellService} from '../../services/CarosellService';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  public carosell: CarosellService;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.carosell = new CarosellService('carosell', 'carosell-container', 'carosell-dot', 'carosell-dot-active', 3);
    this.carosell.animate();
  }
  openDialog() {
    const dialogRef = this.dialog.open(PrivacyPolicyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.carosell.stopAnimate();
  }

}
