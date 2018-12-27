import { storiesOf } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';

import { SideBarComponent } from './side-bar.component';

storiesOf('Side Bar', module)
  .add('with two items', () => ({
    component: SideBarComponent,
    moduleMetadata: {
      imports: [ CommonModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SideBarComponent ]
    },
    props: {
      items: [{
        name: 'something',
        functionName: 'printNumberTwo'
      }, {
        name: 'somethingelse',
        functionName: 'printNumberOne'
      }],
      actionHandler: action('Selected side-bar Item.')
    }
  }));