import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedicaComponent } from './lista-medica.component';

describe('ListaMedicaComponent', () => {
  let component: ListaMedicaComponent;
  let fixture: ComponentFixture<ListaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
