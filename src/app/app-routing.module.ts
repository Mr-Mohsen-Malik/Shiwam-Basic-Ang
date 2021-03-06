import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "auth", 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}