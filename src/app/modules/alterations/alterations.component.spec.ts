import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterationsComponent } from './alterations.component';

describe('AlterationsComponent', () => {
  let component: AlterationsComponent;
  let fixture: ComponentFixture<AlterationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
