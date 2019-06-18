import { Component, OnInit, OnDestroy } from '@angular/core';
import {CarosellService} from '../../services/CarosellService';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class FooterComponent implements OnInit, OnDestroy {
  public carosell: CarosellService;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(PrivacyPolicyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onResize($event){
    this.carosell.stopAnimate();
    this.carosell = new CarosellService('carosell', 'carosell-container', 'carosell-dot', 'carosell-dot-active', 3);
    this.carosell.animate();
  }

  ngAfterViewInit(){
    this.carosell = new CarosellService('carosell', 'carosell-container', 'carosell-dot', 'carosell-dot-active', 3);
    this.carosell.animate();
  }
  ngOnDestroy() {
    this.carosell.stopAnimate();
  }

}
