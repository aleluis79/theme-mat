import { Component, viewChild, viewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import BotonesComponent from '../botones/botones.component';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [ MatExpansionModule, MatIconModule, MatButtonModule, BotonesComponent ],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export default class ExpansionPanelComponent {
  step = 0;

  panels = viewChildren<MatExpansionPanel>(MatExpansionPanel)

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.panels()[this.step].disabled = true;
    this.panels()[this.step].close();
    this.step++;
    this.panels()[this.step].disabled = false;
  }

  prevStep() {
    this.panels()[this.step].disabled = true;
    this.panels()[this.step].close();
    this.step--;
    this.panels()[this.step].disabled = false;
  }

}
