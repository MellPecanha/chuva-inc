import { TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContentComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ContentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ts'`, () => {
    const fixture = TestBed.createComponent(ContentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ts');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ContentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ts app is running!');
  });
});
