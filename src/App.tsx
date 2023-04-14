import './App.css';
import shape1 from "./assets/shape1.png"
import shape2 from "./assets/shape2.png"
import CodeEditorBlock from './components/CodeEditorBlock';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='body-container'>
        <img src={shape2} alt="shape2" className='shape2' />
        <h1 className='text-center'><span className='text-bold'>AI</span> to write code, blogs & more</h1>
        <h4 className='text-center'>
          Enhance everything you do by using the latest from OpenAI to solve problems, write solutionsand make life easier.
        </h4>
        <button className='get-started-button'>Get Started</button>
        <CodeEditorBlock />
      </div>
      <div className='bottom-container'>
        <img src={shape1} alt="shape1" className='shape1' />
      </div>
    </>
  );
}

export default App;
