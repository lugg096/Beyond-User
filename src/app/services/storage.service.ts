import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async validarAuth(): Promise<boolean> {
    const user=await this.getLocalStorage('user');
    console.log('user',user);
    
    if (!user) {
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  }

  async getLocalStorage(name) {

    
    let item = await Storage.get({ key: name }) || null;
    console.log('item',item);
    if (!item) return null;
    return JSON.parse(item.value);
  }

  async setLocalStorage(name, data) {
    console.log('MOSTRAR', name);
    await Storage.set({ key: name, value: JSON.stringify(data) });
  }
  async removeStorage(name) {
    console.log('MOSTRAR', name);
    await Storage.remove({ key: name });
  }

  async clearStorage() {
    console.log('Limpiar' );
    await Storage.clear();
  }

}
