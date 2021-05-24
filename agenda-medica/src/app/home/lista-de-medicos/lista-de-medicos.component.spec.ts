import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeMedicosComponent } from './lista-de-medicos.component';

describe('ListaDeMedicosComponent', () => {
  let component: ListaDeMedicosComponent;
  let fixture: ComponentFixture<ListaDeMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
