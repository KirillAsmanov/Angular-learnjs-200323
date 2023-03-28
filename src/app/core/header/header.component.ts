import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	// selector: 'div[id="root"]',
	selector: 'app-header',
	// template: `<h1>header works!</h1>`,
	// styles: ['h1 { color: red }'],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	// encapsulation : ViewEncapsulation.None
	encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {
	title = 'Angular-learnjs-200323';
	window = window;
	iconSrc = '../../../favicon.ico';
	//title = "new value";
	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Click', event);
	}
}
