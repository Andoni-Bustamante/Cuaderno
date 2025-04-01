import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhwasComponent } from './manhwas.component';

describe('ManhwasComponent', () => {
  let component: ManhwasComponent;
  let fixture: ComponentFixture<ManhwasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManhwasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManhwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
