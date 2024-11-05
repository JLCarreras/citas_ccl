import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecapturaComponent } from './precaptura.component';

describe('PrecapturaComponent', () => {
  let component: PrecapturaComponent;
  let fixture: ComponentFixture<PrecapturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrecapturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrecapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
