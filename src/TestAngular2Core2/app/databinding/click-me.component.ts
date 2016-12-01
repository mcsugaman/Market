import { Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dj-click-me',
    template: `
                <button (click)="onClickMe()" >Click me!</button>
                {{clickMessage}}
`

})
export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = "You are my hero!";
    }
}
