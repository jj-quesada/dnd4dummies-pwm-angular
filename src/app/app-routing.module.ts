import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@data/constanst/routes';


const routes: Routes = [
  {
    path:ROUTES.HOME.DEFAULT,
    loadChildren: () => import('./modules/home/home.module').then(m=> m.HomeModule),
  },
  {
    path:ROUTES.GLOSSARY.DEFAULT,
    loadChildren: () => import('./modules/glossary/glossary.module').then(m=> m.GlossaryModule)
  },
  {
    path:ROUTES.AUTH.DEFAULT,
    loadChildren: () => import('./modules/auth/auth.module').then(m=> m.AuthModule)
  },
  {
   path:ROUTES.CHARACTER.DEFAULT,
   loadChildren:() => import('./modules/character-creator/character-creator.module').then(m => m.CharacterCreatorModule)
  },
  {
    path:ROUTES.FORUM.DEFAULT,
    loadChildren:() => import('./modules/forum/forum.module').then(m => m.ForumModule)
   }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
