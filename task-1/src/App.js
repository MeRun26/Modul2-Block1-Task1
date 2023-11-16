import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
// Декларативный стиль: описание структуры компонента React.
function App() {
  // Императивный стиль: прямые манипуляции с объектом Date.
  const currentYear = new Date().getFullYear(); 
  return (
    createElement(
      'div', 
      { className : 'App' }, 
      createElement('header',
      { className : 'App-header' },
        createElement('img',
        { src: logo, className: 'App-logo', alt: 'logo' }, ),

        createElement('p',
        null,
        'Edit ',
        createElement('code', null, 'src/App.js',),
        ' and save to reload.',
        ),

        createElement('a', 
        {className:'App-link', 
        href: 'https://reactjs.org',
        target: '_blank',
        rel: 'noopener noreferrer'},
        'Learn React',
        ),
        createElement('p',
        null,
        currentYear
        ),
        /* Декларативный стиль: использование переменной currentYear в JSX. */
      )
    )   
  )    
}
export default App;