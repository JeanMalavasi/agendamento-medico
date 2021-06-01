import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const body = form.value

    let respostaPaciente: any
    

    this.http
      .get('http://localhost:3000/paciente/obterum/' + body.paciente)
      .subscribe(
        (res1): any => {

          respostaPaciente = res1

          body.paciente = respostaPaciente._id
          //console.log(body)
          this.http
            .get('http://localhost:3000/medico/obterum/' + body.medico)
            .subscribe(
              (res2): any => {

                respostaPaciente = res2

                body.medico = respostaPaciente._id
                this.http
                  .post('http://localhost:3000/agenda', body)
                  .subscribe(
                    (res): any => {
                      // console.log(res)
                    },
                    (err): any => {
                      console.log(err)
                    }
                  )

              },
              (err): any => {
                console.log(err)
              }
            )

        },
        (err): any => {
          console.log(err)
        }
      )

  }

}
