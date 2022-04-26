import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {useState} from 'react';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import About from './pages/About'
import NotFound from './pages/NotFound'

import {BlogsContext} from './Helper/Context.js'

function App() {
  const [blogs, setBlogs] = useState((
    JSON.parse(localStorage.getItem("myBlogs")) || [{
    id: 0,
    img: 'https://miro.medium.com/max/1400/1*bx8YaOyxxpwSbCcbvIBgVQ.jpeg',
    title: 'ReactJS and React Native - Key Differences',
    author: 'Medium',
    overview: 'ReactJS is a JavaScript library that combines the speed of JavaScript and uses a new method of rendering web pages, making them highly dynamic and responsive to user input. As a result, the product dramatically changed Facebook approach to development.'
  }, {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SuioD_EZtzMJ-aTjvqi2hr76ZBanuWbIqxEQSJKhb5BjRC_o6BBTL8VqB4qSKvWF-88&usqp=CAU',
    title: 'Introduction to GitHub and Open-Source Projects',
    author: 'DigitalOcean',
    overview: 'Open-source projects that are hosted in public repositories benefit from contributions made by the broader developer community, and are typically managed through Git.'
  }, {
    id: 2,
    img: 'https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png',
    title: 'Why hooks are the best thing to happen to React',
    author: 'StackOverFlow',
    overview: 'Originally, React mainly used class components, which can be strenuous at times as you always had to switch between classes, higher-order components, and render props. With React hooks, you can now do all these without switching, using functional components.'
  }]))
  return (
    <Router basename="/tech-blog">
      <Header />
      <BlogsContext.Provider value={{blogs, setBlogs}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BlogsContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
