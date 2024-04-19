
import { useState } from 'react';
import './App.scss';

function App() {
  

  const [mode, setMode] = useState(true)


  return (
  <div hieght={700} className= {mode == true ? 'App container light' : 'App container dark'}>
    <div className='nav'>
      <a className='logo' href="#">Navbar</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className='sign'>Sign in</button>
    </div>
  <section className='hero'>
    <div className='hr'>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ullam ab enim magnam distinctio, doloribus omnis, consequatur quidem quos quae porro. Sapiente aperiam ad incidunt impedit, perferendis aliquam laboriosam officia!
      Quos esse adipisci totam non, cupiditate, vitae rerum optio beatae eius ut laudantium id consectetur voluptate debitis provident quasi dicta sapiente dolor? Nemo, quo accusantium sint iste dolorem facere. Magni?</p>
      <button className='sign'>more</button>
      </div>
  </section>
<h1 className={mode == true ? 'title light' : 'title dark'}>Salom</h1>
 <button className={mode == true ? 'btn end' : 'btn start'   }  onClick={()=> setMode(!mode)}>
 <img className={mode == true ? 'rotate' :'rotate2' } width={70} src={mode ?  'https://cdn-icons-png.flaticon.com/128/1812/1812660.png' : 'https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png'
 }/>
 </button>
  </div>
  );
}
export default App;
