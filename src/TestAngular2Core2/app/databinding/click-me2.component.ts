import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dj-click-me2',
    template: `
                <input #box (keyup)="onKey(box.value)" />
                {{values}}
`

})
export class ClickMe2Component {
    values = '';

    onKey(value: string) {
        this.values += value + ' | ';
    }

}
