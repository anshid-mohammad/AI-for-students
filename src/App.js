import { Fa0 } from 'react-icons/fa6';
import './App.css';
import CourseHighlights from './components/CourseHighlights/CourseHighlights';
import Header from './components/Header/Header';
import Headline from './components/HeadLine/Headline';
import Interactive from './components/Interactive/Interactive';
import Steps from './components/Steps/Steps';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import EnrollNowContent from './components/EnrollNowContent/EnrollNowContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Headline/>
      <CourseHighlights/>
      <Interactive/>
      <Steps/>
      <WhyChoose/>
      <EnrollNowContent/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
