import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HelloWorld from './components/helloWorld/HelloWorld'
import AboutMe from './components/aboutMe/AboutMe'
import Tools from './components/tools/Tools'
import { ScrollProvider } from './components/ScrollContext'; // Импортируем провайдер контекста

// import Contacts from './components/contacts/Contacts'



function App() {
  return (
    <div className="App">
      <ScrollProvider>
      <div>
      <Header/>
      <HelloWorld/>
      <AboutMe/>
      <Tools/>
       
      </div>
    </ScrollProvider>
      <Footer/>
    </div>
  );
}

export default App;
