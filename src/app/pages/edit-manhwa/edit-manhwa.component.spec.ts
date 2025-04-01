import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManhwaComponent } from './edit-manhwa.component';

describe('EditManhwaComponent', () => {
  let component: EditManhwaComponent;
  let fixture: ComponentFixture<EditManhwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditManhwaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditManhwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
