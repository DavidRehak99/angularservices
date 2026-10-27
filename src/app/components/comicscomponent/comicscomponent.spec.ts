import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comicscomponent } from './comicscomponent';

describe('Comicscomponent', () => {
  let component: Comicscomponent;
  let fixture: ComponentFixture<Comicscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Comicscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Comicscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
