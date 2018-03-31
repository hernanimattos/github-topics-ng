import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubTopicsComponent } from './github-topics.component';

describe('GithubTopicsComponent', () => {
  let component: GithubTopicsComponent;
  let fixture: ComponentFixture<GithubTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
