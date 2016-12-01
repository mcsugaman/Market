import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './databinding/databinding.component';
import { ClickMeComponent } from './databinding/click-me.component';
import { ClickMe2Component } from './databinding/click-me2.component';

import { HeroFormComponent } from './forms/hero-form.component';

import { HeroListComponent } from './databinding/hero-list.component';

import { NewHeroComponent } from './tutorial/new-hero.component';
import { HeroDetailComponent } from './tutorial/hero-detail.component';
import { MyAppComponent } from './tutorial/my-app.component';
import { DashboardComponent } from './tutorial/dashboard.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
        ],
    declarations: [
        AppComponent,
        DataBindingComponent,
        ClickMeComponent,
        ClickMe2Component,
        HeroFormComponent,
        HeroListComponent,
        NewHeroComponent,
        MyAppComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }