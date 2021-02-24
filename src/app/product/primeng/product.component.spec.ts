import { TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'table'`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('table');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('table app is running!');
  });
});
