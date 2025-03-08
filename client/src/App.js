import Spline from '@splinetool/react-spline';
import NavBar from './components/NavBar';
import scene from './adventure_time_copy.spline'

function App() {
  return (
    <div>
      <NavBar/>
      <div className='flex justify-around items-center h-screen'>
        <div className='text-white w-[500px]'>
          <h1 className='text-4xl font-bold drop-shadow-md'>Adventure Time with Finn and Jake</h1>
          <p className=' font-medium drop-shadow-md'>Welcome to the ultimate fan site dedicated to Finn the Human and Jake the Dog from the beloved animated series Adventure Time! Join us as we explore the Land of Ooo and dive into the adventures of these two best friends.</p>
        </div>
        <Spline style={{width: '700px', height: '700px'}} scene={scene} />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
