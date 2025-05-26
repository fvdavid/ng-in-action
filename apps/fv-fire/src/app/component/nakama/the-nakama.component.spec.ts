import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheNakamaComponent } from './the-nakama.component';

describe('TheNakamaComponent', () => {
  let component: TheNakamaComponent;
  let fixture: ComponentFixture<TheNakamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheNakamaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheNakamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
