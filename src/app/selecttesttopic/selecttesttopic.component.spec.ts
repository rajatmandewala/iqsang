import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttesttopicComponent } from './selecttesttopic.component';

describe('SelecttesttopicComponent', () => {
  let component: SelecttesttopicComponent;
  let fixture: ComponentFixture<SelecttesttopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttesttopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttesttopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
