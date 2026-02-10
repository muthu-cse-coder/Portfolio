// // import React from 'react';
// // import { ThemeProvider } from './context/ThemeContext';
// // import Header from './components/Header/Header';
// // import Hero from './components/Hero/Hero';
// // import AnimatedStats from './components/Stats/Stats';
// // import About from './components/About/About';
// // import Skills from './components/Skills/Skills';
// // import Projects from './components/Projects/Projects';
// // import Contact from './components/Contact/Contact';
// // import Footer from './components/Footer/Footer';
// // import Timeline from './components/Timeline/timeline';
// // import './App.css';

// // function App() {
// //   return (
// //     <ThemeProvider>
// //       <div className="App">
// //         <Header />
// //         <main>
// //           <Hero />
// //           <AnimatedStats />
// //           <About />
// //           <Timeline/>
// //           <Skills />
// //           <Projects />
// //           <Contact />
// //         </main>
// //         <Footer />
// //       </div>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { ThemeProvider } from './context/ThemeContext';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import AnimatedStats from './components/Stats/Stats';
// import About from './components/About/About';
// import Timeline from './components/Timeline/Timeline';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import './App.css';

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="App">
//         <Header />
//         <main>
//           <Hero />
//           <AnimatedStats />
//           <About />
//           <Timeline />
//           <Skills />
//           <Projects />
//           <Contact />
//         </main>
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AnimatedStats from './components/Stats/Stats';
import About from './components/About/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills/Skills';
import Services from './components/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <AnimatedStats />
          <About />
          <Timeline />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;