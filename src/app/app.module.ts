import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RowComponent } from './paginas/inicio/filas/row.component';
import { HeaderComponent } from './paginas/inicio/cabecera/header.component';
import { SubNavComponent } from './paginas/inicio/barra_de_navegacion/sub-nav.component';
import { HomeComponent } from './paginas/inicio/home.component';
import { ListSurveyComponent } from './paginas/lista_de_formularios/list-survey.component';
import { NavbarComponent } from './componentes/barra_superior/navbar.component';
import { TitleComponent } from './componentes/barra_inferior/title.component';
import { ProgressBarComponent } from './paginas/lista_de_formularios/barra_de _progreso/progress-bar.component';
import { RowListComponent } from './paginas/lista_de_formularios/item_formulario/row-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormAComponent } from './paginas/formulario_A/form-a.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { TextboxNumericoComponent } from './componentes/textbox-numerico/textbox-numerico.component';
import { TextboxTextoComponent } from './componentes/textbox-texto/textbox-texto.component';
import { TextboxPorcentajeComponent } from './componentes/textbox-porcentaje/textbox-porcentaje.component';
import { TextboxEnteroComponent } from './componentes/textbox-entero/textbox-entero.component';
import { TextboxListaDesplegableComponent } from './componentes/lista-desplegable/textbox-lista-desplegable.component';
import { SwitchBotonComponent } from './componentes/switch-boton/switch-boton.component';
import { CodigoFonoComponent } from './componentes/codigo-fono/codigo-fono.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioBComponent } from './paginas/formulario_B/formulario-b.component';
import { FormularioCComponent } from './paginas/formulario_C/formulario-c.component';
import { FormularioDComponent } from './paginas/formulario_D/formulario-d.component';
import { FormularioEComponent } from './paginas/formulario_E/formulario-e.component';
import { FormularioFComponent } from './paginas/formulario_F/formulario-f.component';
import { FormularioGComponent } from './paginas/formulario_G/formulario-g.component';
import { FormularioHComponent } from './paginas/formulario_H/formulario-h.component';
import { FormularioIComponent } from './paginas/formulario_I/formulario-i.component';
import { FormularioJComponent } from './paginas/formulario_J/formulario-j.component';
import { MenuFooterComponent } from './componentes/menu-footer/menu-footer.component';
import { ApiService } from './servicios/api.service';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { SubtituloComponent } from './componentes/subtitulo/subtitulo.component';
import { EmailComponent } from './componentes/email/email.component';
import { PermanenteComponent } from './paginas/formulario_E/opciones/permanente/permanente.component';
import { TemporalComponent } from './paginas/formulario_E/opciones/temporal/temporal.component';
import { OpcionesComponent } from './paginas/formulario_E/opciones/opciones.component';
import { Metodos_service } from "./index_db/metodos/metodos.service";
import { DexieService } from "./servicios/dexie.service";
import { FechaComponent } from './componentes/fecha/fecha.component';
import { DialogoComponent } from './componentes/modal-dialogo/dialogo.component';
import { Spinner } from './componentes/spinner/spinner';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    HeaderComponent,
    SubNavComponent,
    HomeComponent,
    
    ListSurveyComponent,
    NavbarComponent,
    TitleComponent,
    ProgressBarComponent,
    RowListComponent,
    FormAComponent,
    TextboxNumericoComponent,
    TextboxTextoComponent,
    TextboxPorcentajeComponent,
    TextboxEnteroComponent,
    TextboxListaDesplegableComponent,
    SwitchBotonComponent,
    CodigoFonoComponent,
    FormularioBComponent,
    FormularioCComponent,
    FormularioDComponent,
    FormularioEComponent,
    FormularioFComponent,
    FormularioGComponent,
    FormularioHComponent,
    FormularioIComponent,
    FormularioJComponent,
    MenuFooterComponent,
    CheckboxComponent,
    SubtituloComponent,
    EmailComponent,
    PermanenteComponent,
    TemporalComponent,
    OpcionesComponent,
    FechaComponent,
    DialogoComponent,
    Spinner
  ],
  imports: [
    
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents:[
    DialogoComponent
  ],
  providers: [DexieService,Metodos_service,ApiService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {   }
