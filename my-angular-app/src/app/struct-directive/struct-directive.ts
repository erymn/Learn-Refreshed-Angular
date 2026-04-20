import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  // selector: 'app-struct-directive',
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './struct-directive.html',
  styleUrl: './struct-directive.css',
})
export class StructDirective {

  ok=true;
  items = ['A', 'B', 'C', 'D']
}
