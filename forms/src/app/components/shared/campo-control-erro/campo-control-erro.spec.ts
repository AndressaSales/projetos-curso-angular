import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoControlErro } from './campo-control-erro';

describe('CampoControlErro', () => {
  let component: CampoControlErro;
  let fixture: ComponentFixture<CampoControlErro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoControlErro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoControlErro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
