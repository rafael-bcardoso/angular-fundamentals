import { Component, OnInit } from '@angular/core';
import { Observable, PartialObserver } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<div>Estudo de Promises e Observables</div>`
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // this.promise('Maria')
    //   .then(result => console.log(result))
    //   .catch(error => console.log('Deu ruim ai'))
    //   .finally(() => console.log('Fim da execução'));

    // this.observable('Rafael').subscribe(
    //   result => console.log(result),
    //   error => console.log(error),
    //   () => console.log('Fim!')
    // );

    const observer: PartialObserver<string> = {
      next: result => console.log(result),
      error: erro => console.log(erro),
      complete: () => console.log('Fim da Execução')
    }

    this.observable('Rafael').subscribe(observer)

  }

  promise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === "Rafael") {
        setTimeout(() => {
          resolve(`Seja Bem-Vindo ${nome}`);
        }, 500);
      } else {
        reject(`${nome}, você não pode entrar nessa área`);
      }
    })
  }

  observable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome == 'Rafael') {
        subscriber.next(`Olá ${nome}`);
      } else {
        subscriber.error(`Deu ruim aqui ${nome}`);
      }

      subscriber.complete();
    });
  }


}
