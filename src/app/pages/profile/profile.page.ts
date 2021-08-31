import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @ViewChild('drawer', { read: ElementRef, static: true }) drawer: ElementRef;

  constructor(
    private _storage: StorageService,
    public router: Router,
    public formBuilder: FormBuilder,
    private renderer: Renderer2,) {
    this.profileForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      propiedad: ['', Validators.required],
    });
  }

  public profileForm: FormGroup;
  public submitAttempt: boolean = false;

  public user: any = {
    username: ''
  };
  public dataUser: any = {
    name: '',
    phone: '',
    email: ''
  };

  edit = false;

  ngOnInit() {
    this.getUser();
  }

  save() {

    this.submitAttempt = true;
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }

  }

  editar() {
    this.edit = !this.edit;
    this.renderer.addClass(this.drawer.nativeElement, 'drawerEdidt');
  }

  cancelEdit(){
    this.edit = false;
    this.renderer.removeClass(this.drawer.nativeElement, 'drawerEdidt');
  }

  async getUser() {
    this.user = await this._storage.getLocalStorage('user');
    this.dataUser = await this._storage.getLocalStorage('dataUser');

    this.profileForm.controls['name'].setValue(this.dataUser.name);
    this.profileForm.controls['email'].setValue(this.dataUser.email);
    this.profileForm.controls['phone'].setValue(this.dataUser.phone);
    this.profileForm.controls['propiedad'].setValue(this.user.username);
  }

  myBackButton() {
    this.router.navigate(['/inicio']);
  }

}
