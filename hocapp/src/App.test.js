import {render, screen } from '@testing-library/react'; 
import { createRoot } from "react-dom/client";
import { act } from 'react-dom/test-utils';   

import Checkout from './Checkout/Checkout';


describe('Testing Checkout Component', () => { 
  let element;
  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    element = null;
  });


    test ('Should have Shipping address text', () => {
        render(<Checkout />);
        expect(screen.getByText('Shipping address')).toBeInTheDocument();
       
    });

    test('should have container class in div container',()=>{
        render(<Checkout />);
        expect(screen.getByTestId('container')).toHaveClass('container');
    });

    test("Should have 9 input in Checkout Componenet",()=>{
      act(() => {
        createRoot(element).render(<Checkout />);
      });
      const count = element.querySelectorAll('Input').length;
      expect(count).toBe(9);
    });

    test("Should have 1 Checkbox in Checkout Componenet",()=>{
      act(() => {
        createRoot(element).render(<Checkout />);
      });
      const count = element.querySelectorAll('Checkbox').length;
      expect(count).toBe(0);
    });
    test("Should have 1 button in Checkout Componenet",()=>{
      act(() => {
        createRoot(element).render(<Checkout />);
      });
      const count = element.querySelectorAll('Button').length;
      expect(count).toBe(0);
    });


  

   
    

   
})