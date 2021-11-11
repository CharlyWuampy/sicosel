import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginasSitiosComponent } from './paginas-sitios/paginas-sitios.component';
import { GeneralesPaginaComponent } from './generales-pagina/generales-pagina.component';
import { DemograficosComponent } from './demograficos/demograficos.component';
import { BiometricosComponent } from './biometricos/biometricos.component';
import { FamiliaresComponent } from './familiares/familiares.component';
import { JudiricosComponent } from './judiricos/judiricos.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { OficiosComponent } from './oficios/oficios.component';
import { ApoyoComponent } from './apoyo/apoyo.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { AmparoComponent } from './amparo/amparo.component';
import { ConclucionComponent } from './conclucion/conclucion.component';
import { ExtincionComponent } from './extincion/extincion.component';
import { SICOSELLOGComponent } from './sicosellog/sicosellog.component';
import { HomeComponent } from './home/home.component';
import { LogSerpostalesComponent } from './log-serpostales/log-serpostales.component';
import { AsesoriajudiricaComponent } from './asesoriajudirica/asesoriajudirica.component';
import { DerivacionepostalesComponent } from './derivacionepostales/derivacionepostales.component';
import { DonativosotorgadosComponent } from './donativosotorgados/donativosotorgados.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { VinculacionpenitensarioestatalComponent } from './vinculacionpenitensarioestatal/vinculacionpenitensarioestatal.component';
import { ServiciosPostalesLOGComponent } from './servicios-postales-log/servicios-postales-log.component';
import { ServiciosPostalesComponent } from './servicios-postales/servicios-postales.component';
import { TrabajoSocialComponent } from './trabajo-social/trabajo-social.component';
import { LibertadCondicionadaComponent } from './libertad-condicionada/libertad-condicionada.component';
import { JornadasDeTrabajoComponent } from './jornadas-de-trabajo/jornadas-de-trabajo.component';
import { TratamientoEnLibertadComponent } from './tratamiento-en-libertad/tratamiento-en-libertad.component';
import { TratamientosEnSemilibertadComponent } from './tratamientos-en-semilibertad/tratamientos-en-semilibertad.component';
import { CondenaCondenacionalComponent } from './condena-condenacional/condena-condenacional.component';
import { LibertadPreparatoriaComponent } from './libertad-preparatoria/libertad-preparatoria.component';
import { RemisionParcialDeLaPenaComponent } from './remision-parcial-de-la-pena/remision-parcial-de-la-pena.component';
import { TratamientoPreLiberacionalComponent } from './tratamiento-pre-liberacional/tratamiento-pre-liberacional.component';
import { Art75ConfinamientoComponent } from './art75-confinamiento/art75-confinamiento.component';
import { LibertadSupervisadaComponent } from './libertad-supervisada/libertad-supervisada.component';
import { ServiciospostpenalesBComponent } from './serviciospostpenales-b/serviciospostpenales-b.component';
import { TrabajosocialBComponent } from './trabajosocial-b/trabajosocial-b.component';
import { DerivacionesPostpenalesComponent } from './derivaciones-postpenales/derivaciones-postpenales.component';
import { DonativosOtorgadosComponent } from './donativos-otorgados/donativos-otorgados.component';
import { PsicologiaBComponent } from './psicologia-b/psicologia-b.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { ConsultasComponent } from './consultas/consultas.component';


const routes: Routes = [
  { path: 'Demografico', component: DemograficosComponent },
  { path: 'Judiricos', component: JudiricosComponent },
  { path: 'Oficios', component: OficiosComponent },
  { path: 'Familiares', component: FamiliaresComponent },
  { path: 'Biometricos', component: BiometricosComponent },
  { path: 'Generales', component: GeneralesPaginaComponent },
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
  { path: '', component: SICOSELLOGComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];



@NgModule({
  declarations: [
    AppComponent,
    PaginasSitiosComponent,
    GeneralesPaginaComponent,
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
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
