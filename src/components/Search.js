const Search = (props) => {
    return (
        <div className="searchFood">
            <div>
                <span>Search</span>
                <input onChange={(event) => {

                    const newLIst = props.food.filter(singleFood => {
                        return singleFood.name.toLowerCase().includes(event.target.value.toLowerCase())
                    });
                    props.setFilteredFood(newList)
                }} />
            </div>
        </div>
    )
}

export default Search;