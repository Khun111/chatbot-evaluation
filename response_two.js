const { JSDOM } = require('jsdom');

// Create a simulated DOM environment
const dom = new JSDOM('<!DOCTYPE html>');
global.document = dom.window.document;

function createAndConfigureElement(tag, attributes) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
}

try {
  const results = { testKey: 'testValue' };
  const key = 'testKey';
  
  const newHiddenInput = createAndConfigureElement('input', {
    type: 'hidden',
    name: key,
    value: results[key]
  });
  
  console.log('Input created successfully');
  console.log('Input type:', newHiddenInput.getAttribute('type'));
  console.log('Input name:', newHiddenInput.getAttribute('name'));
  console.log('Input value:', newHiddenInput.getAttribute('value'));
} catch (error) {
  console.error('Error:', error);
}