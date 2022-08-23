import React from "react";
import { act } from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import App from "../src/App";

/**
 * @jest-environment jsdom
 */

describe('App', function () {
   it('should display pass in number', function () {
       let container = document.createElement('div');
       document.body.appendChild(container);
       act(() => {
           ReactDOM.render(<App />, container);
       })
       const header = container.querySelector('h1');
       expect(header.textContent).toBe("Create React App from Scratch Using Typescript!")
   });
});