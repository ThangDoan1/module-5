import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.component.html',
  styleUrls: ['./progres-bar.component.css']
})
export class ProgresBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
