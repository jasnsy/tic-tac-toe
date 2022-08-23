import React from "react";
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import App from "../src/App";

describe('App', function () {
    it('should display pass in number', function () {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            const root = createRoot(container);
            root.render(<App />);
        })
       const header = container.querySelector('h1');
       expect(header.textContent).toBe("Create React App from Scratch Using Typescript!")
    });
});