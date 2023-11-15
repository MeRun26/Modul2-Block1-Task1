// import logo from './logo.svg';
// import './App.css';
// // Декларативный стиль: описание структуры компонента React.
// function App() {
//   // Императивный стиль: прямые манипуляции с объектом Date.
//   const currentYear = new Date().getFullYear(); 
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* Декларативный стиль: использование переменной currentYear в JSX. */}
//         <p>{currentYear}</p>
//       </header>
//     </div>
//   );
// }

// export default App;
import logotip from './logo.svg';
import './App.css';
function App() {

  const currentYear = new Date().getFullYear();
  // Создание элементов
  let appDiv = document.createElement('div');
  appDiv.className = 'App';

  let header = document.createElement('header');
  header.className = 'App-header';

  let logo = document.createElement('img');
  logo.src = logotip;
  logo.className = 'App-logo';
  logo.alt = 'logo';

  let paragraph = document.createElement('p');
  paragraph.textContent = 'Edit ';

  let codeElement = document.createElement('code');
  codeElement.textContent = 'src/App.js';

  paragraph.appendChild(codeElement);
  paragraph.textContent += ' and save to reload.';

  let link = document.createElement('a');
  link.className = 'App-link';
  link.href = 'https://reactjs.org';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Learn React';


  let paragraphYear = document.createElement('p');
  paragraphYear.textContent = currentYear;
  
  // Структурирование элементов
  header.appendChild(logo);
  header.appendChild(paragraph);
  header.appendChild(link);
  header.appendChild(paragraphYear);
  appDiv.appendChild(header);

  // Добавление созданных элементов на страницу
  document.getElementById('root').appendChild(appDiv);
  return
}
// Вызов функции для создания приложения
export default App;