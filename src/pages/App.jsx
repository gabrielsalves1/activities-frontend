import Formulary from '../components/Formulary';
import ListActivities from '../components/ListActivities';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulary />
      <ListActivities />
    </div>
  );
}

export default App;
