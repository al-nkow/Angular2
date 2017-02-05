// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // приложение выполняется в браузере

import { AppComponent }  from './app.component';
import { HelloWorldListComponent }  from './hello-world-list/hello-world-list.component';
import { MyElement }  from './my-element/my-element.component';


// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf, ngFor и т.д.

@NgModule({ // с помощью ngModule превращаем обычный класс в модуль angular2
    imports:      [ BrowserModule ], // какие другие модули потребуются для работы приложения
    // в declarations нужно перечислить все созданные компоненты, директивы, сервисы
    declarations: [ AppComponent, HelloWorldListComponent, MyElement ], // корневой компонент данного приложения
    bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { } 
