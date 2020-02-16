import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {GoHeader} from './header/header.component';
import {GoInput} from './input/input.component';
import {GoTab} from './tab/tab.component';
import {GoSearchCard} from './search-card/search-card.component';

@NgModule({
    declarations: [
        GoHeader,
        GoInput,
        GoTab,
        GoSearchCard
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        GoHeader,
        GoInput,
        GoTab,
        GoSearchCard
    ]
})
export class ComponentModule {
}
