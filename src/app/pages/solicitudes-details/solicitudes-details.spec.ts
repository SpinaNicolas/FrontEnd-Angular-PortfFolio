import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesDetails } from './solicitudes-details';

describe('SolicitudesDetails', () => {
  let component: SolicitudesDetails;
  let fixture: ComponentFixture<SolicitudesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudesDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
