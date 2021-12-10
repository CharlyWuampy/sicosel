import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginasSitiosComponent } from './paginas/paginas-sitios/paginas-sitios.component';
import { DemograficosComponent } from './paginas/demograficos/demograficos.component';
import { BiometricosComponent } from './paginas/biometricos/biometricos.component';
import { FamiliaresComponent } from './paginas/familiares/familiares.component';
import { JudiricosComponent } from './paginas/judiricos/judiricos.component';
import { BeneficiosComponent } from './paginas/beneficios/beneficios.component';
import { OficiosComponent } from './paginas/oficios/oficios.component';
import { ApoyoComponent } from './paginas/apoyo/apoyo.component';
import { ActualizarComponent } from './paginas/actualizar/actualizar.component';
import { AmparoComponent } from './paginas/amparo/amparo.component';
import { ConclucionComponent } from './paginas/conclucion/conclucion.component';
import { ExtincionComponent } from './paginas/extincion/extincion.component';
import { SICOSELLOGComponent } from './paginas/sicosellog/sicosellog.component';
import { HomeComponent } from './paginas/home/home.component';
import { LogSerpostalesComponent } from './paginas/log-serpostales/log-serpostales.component';
import { AsesoriajudiricaComponent } from './paginas/asesoriajudirica/asesoriajudirica.component';
import { DerivacionepostalesComponent } from './paginas/derivacionepostales/derivacionepostales.component';
import { DonativosotorgadosComponent } from './paginas/donativosotorgados/donativosotorgados.component';
import { PsicologiaComponent } from './paginas/psicologia/psicologia.component';
import { VinculacionpenitensarioestatalComponent } from './paginas/vinculacionpenitensarioestatal/vinculacionpenitensarioestatal.component';
import { ServiciosPostalesLOGComponent } from './paginas/servicios-postales-log/servicios-postales-log.component';
import { ServiciosPostalesComponent } from './paginas/servicios-postales/servicios-postales.component';
import { TrabajoSocialComponent } from './paginas/trabajo-social/trabajo-social.component';
import { LibertadCondicionadaComponent } from './paginas/libertad-condicionada/libertad-condicionada.component';
import { JornadasDeTrabajoComponent } from './paginas/jornadas-de-trabajo/jornadas-de-trabajo.component';
import { TratamientoEnLibertadComponent } from './paginas/tratamiento-en-libertad/tratamiento-en-libertad.component';
import { TratamientosEnSemilibertadComponent } from './paginas/tratamientos-en-semilibertad/tratamientos-en-semilibertad.component';
import { CondenaCondenacionalComponent } from './paginas/condena-condenacional/condena-condenacional.component';
import { LibertadPreparatoriaComponent } from './paginas/libertad-preparatoria/libertad-preparatoria.component';
import { RemisionParcialDeLaPenaComponent } from './paginas/remision-parcial-de-la-pena/remision-parcial-de-la-pena.component';
import { TratamientoPreLiberacionalComponent } from './paginas/tratamiento-pre-liberacional/tratamiento-pre-liberacional.component';
import { Art75ConfinamientoComponent } from './paginas/art75-confinamiento/art75-confinamiento.component';
import { LibertadSupervisadaComponent } from './paginas/libertad-supervisada/libertad-supervisada.component';
import { ServiciospostpenalesBComponent } from './paginas/serviciospostpenales-b/serviciospostpenales-b.component';
import { TrabajosocialBComponent } from './paginas/trabajosocial-b/trabajosocial-b.component';
import { DerivacionesPostpenalesComponent } from './paginas/derivaciones-postpenales/derivaciones-postpenales.component';
import { DonativosOtorgadosComponent } from './paginas/donativos-otorgados/donativos-otorgados.component';
import { PsicologiaBComponent } from './paginas/psicologia-b/psicologia-b.component';
import { CapacitacionComponent } from './paginas/capacitacion/capacitacion.component';
import { EmpleoComponent } from './paginas/empleo/empleo.component';
import { ConsultasComponent } from './paginas/consultas/consultas.component';
import { NuevoProcesoComponent } from './paginas/nuevo-proceso/nuevo-proceso.component';
import { GeneralesComponent } from './paginas/generales/generales.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'Demografico', component: DemograficosComponent },
  { path: 'Judiricos', component: JudiricosComponent },
  { path: 'Oficios', component: OficiosComponent },
  { path: 'Familiares', component: FamiliaresComponent },
  { path: 'Biometricos', component: BiometricosComponent },
  { path: 'Generales', component: GeneralesComponent },
  { path: 'Actualizar', component: ActualizarComponent },
  { path: 'Beneficio', component: BeneficiosComponent },
  { path: 'Amparo', component: AmparoComponent },
  { path: 'Conclucion', component: ConclucionComponent },
  { path: 'Extiencion', component: ExtincionComponent },
  { path: 'Logsicosell', component: SICOSELLOGComponent },
  { path: 'ServiciospostalesLog', component: ServiciosPostalesLOGComponent },
  { path: 'Serviciospostales', component: ServiciosPostalesComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Asesoriajudirica', component: AsesoriajudiricaComponent },
  { path: 'Trabajosocial', component: TrabajoSocialComponent },
  { path: 'Psicologia', component: PsicologiaComponent },
  { path: 'LibertadCondicionada', component: LibertadCondicionadaComponent },
  { path: 'JornadasDeTrabajo', component: JornadasDeTrabajoComponent },
  { path: 'TratamientoEnLibertad', component: TratamientoEnLibertadComponent },
  { path: 'TratamientosEnSemilibertad', component: TratamientosEnSemilibertadComponent },
  { path: 'CondenaCondenacional', component: CondenaCondenacionalComponent },
  { path: 'LibertadPreparatoria', component: LibertadPreparatoriaComponent },
  { path: 'RemisionParcialDeLaPena', component: RemisionParcialDeLaPenaComponent },
  { path: 'TratamientoPreLiberacional', component: TratamientoPreLiberacionalComponent },
  { path: 'Art75Confinamiento', component: Art75ConfinamientoComponent },
  { path: 'LibertadSupervisada', component: LibertadSupervisadaComponent },
  { path: 'ServiciospostpenalesB', component: ServiciospostpenalesBComponent },
  { path: 'TrabajosocialB', component: TrabajosocialBComponent },
  { path: 'DerivacionesPostpenales', component: DerivacionesPostpenalesComponent },
  { path: 'DonativosOtorgados', component: DonativosOtorgadosComponent },
  { path: 'PsicologiaB', component: PsicologiaBComponent },
  { path: 'Capacitacion', component: CapacitacionComponent },
  { path: 'Empleo', component: EmpleoComponent },
  { path: 'Consultas', component: ConsultasComponent },
  { path: 'NuevoProeceso', component: NuevoProcesoComponent },
  { path: '', component: SICOSELLOGComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];



@NgModule({
  declarations: [
    AppComponent,
    PaginasSitiosComponent,
    DemograficosComponent,
    BiometricosComponent,
    FamiliaresComponent,
    JudiricosComponent,
    BeneficiosComponent,
    OficiosComponent,
    ApoyoComponent,
    ActualizarComponent,
    AmparoComponent,
    ConclucionComponent,
    ExtincionComponent,
    SICOSELLOGComponent,
    HomeComponent,
    LogSerpostalesComponent,
    AsesoriajudiricaComponent,
    DerivacionepostalesComponent,
    DonativosotorgadosComponent,
    PsicologiaComponent,
    VinculacionpenitensarioestatalComponent,
    ServiciosPostalesLOGComponent,
    ServiciosPostalesComponent,
    TrabajoSocialComponent,
    LibertadCondicionadaComponent,
    JornadasDeTrabajoComponent,
    TratamientoEnLibertadComponent,
    TratamientosEnSemilibertadComponent,
    CondenaCondenacionalComponent,
    LibertadPreparatoriaComponent,
    RemisionParcialDeLaPenaComponent,
    TratamientoPreLiberacionalComponent,
    Art75ConfinamientoComponent,
    LibertadSupervisadaComponent,
    ServiciospostpenalesBComponent,
    TrabajosocialBComponent,
    DerivacionesPostpenalesComponent,
    DonativosOtorgadosComponent,
    PsicologiaBComponent,
    CapacitacionComponent,
    EmpleoComponent,
    ConsultasComponent,
    NuevoProcesoComponent,
    GeneralesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
