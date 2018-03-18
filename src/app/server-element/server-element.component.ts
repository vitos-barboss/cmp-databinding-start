import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('--- constructor called');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('--- onChanges called');
    console.log('changes', changes);
    // this.name = changes.currentValue.name;
  }

  ngOnInit() {
    console.log('--- ngOnInit called');
  }

  ngDoCheck() {
    console.log('--- ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('--- AfterContentInit called');
  }

}
