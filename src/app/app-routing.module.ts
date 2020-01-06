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
    {path: 'lista_de_formularios/:id_encuesta', component: ListSurveyComponent}
    ,
    {path: 'formulario/A/:id_encuesta', component: FormAComponent}
    ,
    {path: 'formulario/B/:id_encuesta', component: FormularioBComponent}
    ,
    {path: 'formulario/C/:id_encuesta', component: FormularioCComponent}
    ,
    {path: 'formulario/D/:id_encuesta', component: FormularioDComponent}
    ,
    {path: 'formulario/E/:id_encuesta', component: FormularioEComponent}
    ,
    {path: 'formulario/F/:id_encuesta', component: FormularioFComponent}
    ,
    {path: 'formulario/G/:id_encuesta', component: FormularioGComponent}
    ,
    {path: 'formulario/H/:id_encuesta', component: FormularioHComponent}
    ,
    {path: 'formulario/I/:id_encuesta', component: FormularioIComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
