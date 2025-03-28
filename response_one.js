const { JSDOM } = require('jsdom');

// Create a simulated DOM environment
const dom = new JSDOM('<!DOCTYPE html>');
global.document = dom.window.document;

try {
  const newHiddenInput = document.createElement('input')
    .setAttribute('type', 'hidden')
    .setAttribute('name', key)
    .setAttribute('value', results[key]);
} catch (error) {
  console.error('Error:', error);
}