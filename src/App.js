import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/es/transfer/search';



function App() {
  const [food, setFood] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(foods);

    const deleteFood = (name) => {
      const copyFoodArr = [...food]
      const foodIndex = food.findIndex(eachFood => 
        eachFood.name === name
      )
      copyFoodArr.splice(foodIndex, 1)
    setFood(copyFoodArr);
    setFilteredFood(copyFoodArr);
  }



  return (
    <div className="App">

      <div> 
      <Search food={food} setFilteredFood={setFilteredFood}/>
      </div>

      <div className='addFood'>
        <AddFoodForm food={food} setFood={setFood} />
      </div>


        <div className='foodList'>
          {filteredFood.map((food) => {
            return(
              <FoodBox food={food} deleteFood={deleteFood}/>
            )
          })}
      </div>
      

    </div>
  );
}

export default App;
