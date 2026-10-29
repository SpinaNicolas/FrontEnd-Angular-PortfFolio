import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectoDetails } from './proyecto-details';

describe('ProyectoDetails', () => {
  let component: ProyectoDetails;
  let fixture: ComponentFixture<ProyectoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectoDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
