import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }


  onAddServer(inputValue: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputValue.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(inputValue: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: inputValue.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
