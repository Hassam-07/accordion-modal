import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-highlight-text',
  templateUrl: './highlight-text.component.html',
  styleUrls: ['./highlight-text.component.scss'],
  animations: [
    trigger('highlightAnimation', [
      state(
        'highlighted',
        style({
          background:
            'linear-gradient(90deg, yellow, yellow 50%, transparent 50%, transparent)',
          backgroundSize: '200% 100%',
          animation: 'highlightAnimation 2s linear infinite',
        })
      ),
      transition('* => highlighted', [animate('2s')]),
    ]),
  ],
})
export class HighlightTextComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  highlightedState = 'default';

  toggleHighlight() {
    this.highlightedState =
      this.highlightedState === 'default' ? 'highlighted' : 'default';
  }
  // @HostListener('mouseup') onMouseUp() {
  //   const selection = window.getSelection();
  //   const selectedText = selection?.toString();

  //   if (selectedText !== '') {
  //     const range = selection?.getRangeAt(0);
  //     const span = this.renderer.createElement('span');
  //     this.renderer.addClass(span, 'highlighted-text');
  //     range?.surroundContents(span);
  //   }
  // }
  @HostListener('mouseup') onMouseUp() {
    const selection = window.getSelection();
    const selectedText = selection?.toString();

    if (selectedText !== '') {
      const range = selection?.getRangeAt(0);
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'highlighted-text');

      range?.surroundContents(span);
    }
  }
}
