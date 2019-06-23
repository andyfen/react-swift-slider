/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Slider from '../Slider';
import 'jest-dom/extend-expect';

describe('Slider - Unit Test', () => {
  afterEach(cleanup);

  const data = [
    {
      id: '1',
      src: 'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '2',
      src: 'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '3',
      src: 'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '4',
      src: 'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30',
    },
    {
      id: '5',
      src: 'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30',
    },
  ];

  it('should render slider', () => {
    const { container } = render(<Slider data={data} />);
    expect(container.querySelector('div > ul').childElementCount).toEqual(5);
    expect(
      container.querySelector('div >:nth-child(2)').childElementCount,
    ).toEqual(5);
    expect(container.querySelector('div >:nth-child(3)')).toBeTruthy();
    expect(container.querySelector('div >:nth-child(2)')).toBeTruthy();
  });

  it('should go to position 4 when on the first slide when clicking on next', () => {
    const { container } = render(<Slider data={data} />);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : hidden',
    );

    const prevButton = container.querySelector('div >:nth-child(3)');
    fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : visible',
    );
  });

  it('should go to previous slide', () => {
    const { container } = render(<Slider data={data} />);
    const prevButton = container.querySelector('div >:nth-child(3)');
    fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(4)')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : visible',
    );

    fireEvent.click(prevButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(4)')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(5)')).toHaveStyle(
      'visibility : hidden',
    );
  });

  it('should go to next slide', () => {
    const { container } = render(<Slider data={data} />);
    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : hidden',
    );

    const nextButton = container.querySelector('div >:nth-child(4)');
    fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : visible',
    );
  });

  it('should go to position 0 when on the last slide when clicking on next', () => {
    const { container } = render(<Slider data={[data[0], data[1]]} />);
    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : hidden',
    );

    const nextButton = container.querySelector('div >:nth-child(4)');
    fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : hidden',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : visible',
    );

    fireEvent.click(nextButton);

    expect(container.querySelector('div > ul > li')).toHaveStyle(
      'visibility : visible',
    );
    expect(container.querySelector('div > ul > :nth-child(2)')).toHaveStyle(
      'visibility : hidden',
    );
  });

  it('should go slide when clicking on a dot', () => {
    const { container } = render(<Slider data={data} />);
    const dotUl = container.querySelector('div >:nth-child(2)');

    expect(dotUl.querySelector(':nth-child(1)')).toHaveStyle(
      'background : #e8784e',
    );
    expect(dotUl.querySelector(':nth-child(3)')).toHaveStyle(
      'background : #909192',
    );

    fireEvent.click(dotUl.querySelector(':nth-child(3)'));

    expect(dotUl.querySelector(':nth-child(1)')).toHaveStyle(
      'background : #909192',
    );
    expect(dotUl.querySelector(':nth-child(3)')).toHaveStyle(
      'background : #e8784e',
    );
  });

  it('should not show dots', () => {
    const { container } = render(<Slider data={data} showDots={false} />);
    expect(container.querySelectorAll('ul').length).toBe(1);
  });

  it('should not show next and previous', () => {
    const { container } = render(
      <Slider data={data} enableNextAndPrev={false} />,
    );
    expect(container.querySelector('div >:nth-child(3)')).toBeFalsy();
    expect(container.querySelector('div >:nth-child(4)')).toBeFalsy();
  });
});
