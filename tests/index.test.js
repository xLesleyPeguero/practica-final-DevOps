import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('index.html', () => {
  it('debe contener el texto "Hola Mundo"', () => {
    // Leer el contenido del archivo HTML
    const html = readFileSync(join(process.cwd(), 'docs', 'index.html'), 'utf-8');
    
    // Crear un DOM virtual con JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Buscar el elemento h1 y verificar su contenido
    const h1 = document.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe('Hola Mundo');
  });

  it('debe contener la clase "container"', () => {
    const html = readFileSync(join(process.cwd(), 'docs', 'index.html'), 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const container = document.querySelector('.container');
    expect(container).toBeTruthy();
  });

  it('debe contener tres elementos con clase "feature"', () => {
    const html = readFileSync(join(process.cwd(), 'docs', 'index.html'), 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const features = document.querySelectorAll('.feature');
    expect(features.length).toBe(3);
  });
}); 