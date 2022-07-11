import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKategoriComponent } from './detail-kategori.component';

describe('DetailKategoriComponent', () => {
  let component: DetailKategoriComponent;
  let fixture: ComponentFixture<DetailKategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailKategoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
