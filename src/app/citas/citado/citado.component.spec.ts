import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitadoComponent } from './citado.component';

describe('CitadoComponent', () => {
  let component: CitadoComponent;
  let fixture: ComponentFixture<CitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
