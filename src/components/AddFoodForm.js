import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props){

    const [ show, setShow ] = useState(false);
    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ calories, setCalories ] = useState('');
    const [ servings, setServings ] = useState('');

    return(
        <div>
            
    {

    show ?
    <div>
    <form onSubmit={(e) => {
        e.preventDefault();
        const copyFoodArr = [...props.food];
        copyFoodArr.push({name, image, calories, servings});
        props.setFood(copyFoodArr);
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    }}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
        
        <label>Image</label>
        <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />

        <label>Calories</label>
        <Input value={calories} type="text" onChange={(e) => {setCalories(e.target.value)}} />

        <label>Servings</label>
        <Input value={servings} type="text" onChange={(e) => {setServings(e.target.value)}} />

        <button type='submit'
        onClick={() => {

        }}
        >
        Create
        </button>

        </form>

        <button onClick={() => {
        setShow(!show)
        }}
        >
        Hide
        </button>
    </div>
    :

    <button onClick={() => {
        setShow(!show)  
    }}
    >
    Add Food Entry
    </button>
} 
        </div>
    )

}

export default AddFoodForm;