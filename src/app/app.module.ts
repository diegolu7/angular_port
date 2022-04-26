import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HrComponent } from './components/hr/hr.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    ExperienciaComponent,
    SkillComponent,
    ProyectosComponent,
    FooterComponent,
    HrComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

