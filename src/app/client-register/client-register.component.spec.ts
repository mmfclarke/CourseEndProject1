import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegisterComponent } from './client-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ClientRegisterComponent', () => {
  let component: ClientRegisterComponent;
  let fixture: ComponentFixture<ClientRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientRegisterComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(ClientRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
