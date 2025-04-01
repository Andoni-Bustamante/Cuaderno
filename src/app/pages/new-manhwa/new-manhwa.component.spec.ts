import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManhwaComponent } from './new-manhwa.component';

describe('NewManhwaComponent', () => {
  let component: NewManhwaComponent;
  let fixture: ComponentFixture<NewManhwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewManhwaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewManhwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
