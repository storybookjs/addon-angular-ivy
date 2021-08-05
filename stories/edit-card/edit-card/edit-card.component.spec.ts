// tslint:disable: max-classes-per-file
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component, Input } from '@angular/core';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EditCardHarness } from '@bo/common/shared/ui-bridge/testing';

import { EditCardModule } from '../edit-card.module';

import { EditCardComponent } from './edit-card.component';

describe('EditCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyEditCardComponent, SimpleEditCardComponent],
      imports: [EditCardModule],
    }).compileComponents();
  });

  beforeEach(() => {});

  it('should toggle edition mode', () => {
    let expectedReadonly;

    const fixture = TestBed.createComponent(EditCardComponent);
    const component = fixture.componentInstance;
    component.readonlyChange.subscribe((v: boolean) => (expectedReadonly = v));
    fixture.detectChanges();

    expect(component.readonly).toEqual(true);

    component.toggleEditionMode();
    expect(component.readonly).toEqual(false);
    expect(expectedReadonly).toEqual(false);

    component.toggleEditionMode();
    expect(component.readonly).toEqual(true);
    expect(expectedReadonly).toEqual(true);
  });
  it('should toggle edition mode with harness', async () => {
    const fixture = TestBed.createComponent(SimpleEditCardComponent);
    const lazyComponent = fixture.componentInstance;
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const editCardHarness = await loader.getHarness(EditCardHarness);

    lazyComponent.skeleton = true;
    fixture.detectChanges();
    expect(await editCardHarness.isReadonly()).toEqual(false);
    expect(await editCardHarness.isEdition()).toEqual(false);
    expect(await editCardHarness.isSkeleton()).toEqual(true);

    lazyComponent.skeleton = false;
    fixture.detectChanges();
    expect(await editCardHarness.isReadonly()).toEqual(true);
    expect(await editCardHarness.isEdition()).toEqual(false);
    expect(await editCardHarness.isSkeleton()).toEqual(false);

    await editCardHarness.toggleEditionMode();
    fixture.detectChanges();
    expect(await editCardHarness.isReadonly()).toEqual(false);
    expect(await editCardHarness.isEdition()).toEqual(true);
    expect(await editCardHarness.isSkeleton()).toEqual(false);
  });

  it('should be able to render edit content lazily', fakeAsync(() => {
    const fixture = TestBed.createComponent(LazyEditCardComponent);
    fixture.detectChanges();
    const content = fixture.debugElement.query(By.css('.edit-card__body'))?.nativeElement;

    expect(content.textContent.trim()).toBe('edition');

    fixture.componentInstance.should = { fail: 'if is not lazy' };
    fixture.componentInstance.readonly = true;
    fixture.detectChanges();

    expect(content.textContent.trim()).toContain('if is not lazy');
  }));
});

@Component({
  template: `
    <lf-edit-card [readonly]="readonly" [skeleton]="skeleton">
      <ng-template lfEditCardEdition>edition</ng-template>
      <ng-template lfEditCardReadonly>{{ should.fail }}</ng-template>
    </lf-edit-card>
  `,
})
class LazyEditCardComponent {
  @Input()
  readonly = false;
  @Input()
  skeleton = false;
  @Input()
  should: unknown;
}

@Component({
  template: `
    <lf-edit-card [skeleton]="skeleton">
      <ng-template lfEditCardEdition>edition</ng-template>
      <ng-template lfEditCardReadonly>readonly</ng-template>
    </lf-edit-card>
  `,
})
class SimpleEditCardComponent {
  @Input()
  skeleton = true;
}
