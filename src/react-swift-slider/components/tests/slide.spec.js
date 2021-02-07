/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/07/27.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Slide from '../Slide';
import { CSS_OVERRIDE_EXTERNAL } from '../../config';

describe('React Swift Slider: Slide - Unit Test', () => {
  afterEach(cleanup);

  describe('when active', () => {
    it('should render Slide with active css properties', () => {
      const props = {
        active: true,
        src: 'some src url',
      };

      const { container } = render(
        <Slide src={props.src} active={props.active} />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
  describe('when NOT active', () => {
    it('should render Slide without active css properties', () => {
      const props = {
        active: false,
        src: 'some src url',
      };

      const { container } = render(
        <Slide src={props.src} active={props.active} />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('css override handles', () => {});
});
