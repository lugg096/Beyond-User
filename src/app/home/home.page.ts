import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { IonicComponentsService } from '../services/ionic-components.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slidesPadre', { static: false }) private slidesPadre: IonSlides;
  @ViewChild('slidesDatos', { static: false }) private slidesDatos: IonSlides;

  private animationItem: AnimationItem;
  public loginForm: FormGroup;
  public load = true;
  public indexSlide = 0;
  public initEnd = false;
  public viewPass = false;
  public tipo = "password"
  public submitAttempt: boolean = false;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private _apiService: ApiServiceService,
    public _comp: IonicComponentsService,
    private _storage: StorageService) {

    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.pattern('^[0-9]+[A|B|D|E]+$'), Validators.required])],
      pass: ['', Validators.required]
    });

  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 700,
    autoplay: {
      delay: 2500,
    },
  };

  slideOptsOnboarding = {
    allowSlideNext: false,
    allowSlidePrev: false,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400
  };

  options: AnimationOptions = {
    path: '/assets/json/27-loading.json',
    loop: true,
    autoplay: true
  };

 async login() {
  
    this.submitAttempt = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.load = true;
      this.nextSlidePadre();

      this._apiService.login(this.loginForm.value).subscribe(async (res: any) => {
        console.log('res',res);
        
        if (res.code == '200'){
         console.log('Entro');
         
        await this._storage.setLocalStorage('user',{username:this.loginForm.value.username});
           this.load = false;
          this.router.navigate(['/inicio']);
        } 
        else {
          this._comp.presentToast('Identidad o contraseña no es correcta', 'danger', 3000);
          this.backSlidePadre();
          this.load = false;
        }
      }, _err => {
        this._comp.presentToast('Error con el servidor', 'danger', 3000);
        this.backSlidePadre();
        this.load = false;
      })
    }

  }

  verSlide() {
    this.slidesDatos.getActiveIndex().then(res => {
      if (!this.initEnd) this.indexSlide = res;
      this.initEnd = false;
    });
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  mostrar() {
    if (this.viewPass) {
      this.tipo = "password";
      this.viewPass = false;
    } else {
      this.tipo = "text";
      this.viewPass = true;
    }
  }

  endSlide() {
    this.initEnd = true;
    this.indexSlide = 2;
  }

  nextSlideDatos() {
    this.slidesDatos.slideNext();
  }

  nextSlidePadre() {
    this.slidesPadre.lockSwipeToNext(false);
    this.slidesPadre.slideNext();
    this.slidesPadre.lockSwipeToNext(true);
  }

  backSlidePadre() {
    this.slidesPadre.lockSwipeToPrev(false);
    this.slidesPadre.slidePrev();
    this.slidesPadre.lockSwipeToPrev(true);
  }
}
