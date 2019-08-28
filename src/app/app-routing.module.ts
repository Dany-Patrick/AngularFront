import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSurveyComponent } from './paginas/lista_de_formularios/list-survey.component';
import { HomeComponent } from './paginas/inicio/home.component';
import { FormAComponent } from './paginas/formulario_A/form-a.component';
import { FormularioBComponent } from './paginas/formulario_B/formulario-b.component';
import { FormularioCComponent } from './paginas/formulario_C/formulario-c.component';
import { FormularioDComponent } from './paginas/formulario_D/formulario-d.component';
import { FormularioEComponent } from './paginas/formulario_E/formulario-e.component';
import { FormularioFComponent } from './paginas/formulario_F/formulario-f.component';
import { FormularioGComponent } from './paginas/formulario_G/formulario-g.component';
import { FormularioHComponent } from './paginas/formulario_H/formulario-h.component';
import { FormularioIComponent } from './paginas/formulario_I/formulario-i.component';
import { FormularioJComponent } from './paginas/formulario_J/formulario-j.component';


const routes: Routes = [
  
    {path: '', component: HomeComponent} ,
    {path: 'lista_de_formularios', component: ListSurveyComponent}
    ,
    {path: 'formulario_A', component: FormAComponent}
    ,
    {path: 'formulario_B', component: FormularioBComponent}
    ,
    {path: 'formulario_C', component: FormularioCComponent}
    ,
    {path: 'formulario_D', component: FormularioDComponent}
    ,
    {path: 'formulario_E', component: FormularioEComponent}
    ,
    {path: 'formulario_F', component: FormularioFComponent}
    ,
    {path: 'formulario_G', component: FormularioGComponent}
    ,
    {path: 'formulario_H', component: FormularioHComponent}
    ,
    {path: 'formulario_I', component: FormularioIComponent}
    ,
    {path: 'formulario_J', component: FormularioJComponent}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
