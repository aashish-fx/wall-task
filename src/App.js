import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Ens Linked';
  const sub_title = 'Ens linked'
  return (
    <div className='App_container'>
        <div className="App">
              <div className='upperpart'>
                  <div className='ellipse'></div>
                  <img src='https://picsum.photos/id/237/200/300' className='ens_image' ></img>
                  <div>
                    <div className='ens_heading'>
                      <span className='ens_heading_span1'>{title}</span>
                      <span className='ens_heading_span2'>{sub_title}</span>
                    </div>
                  </div>
              </div>
              <div className='lowerpart'>
                  <div className='lowerpart_div1'>
                    <span className='lowerpart_span1'>dingaing.eth</span>
                    <div className='lowerpart_inner_div1'>
                      <span className='lowerpart_span2'>1.82</span>
                      <div className='lowerpart_image'></div>
                    </div>
                  </div>
                  <div className='lowerpart_div2'>
                    <span className = 'lowerpart_div2_span1'>2 months ago</span>
                    <span className = 'lowerpart_div2_span2'>+200xp</span>
                  </div>
              </div>

    </div>
    </div>
  );
}

export default App;
