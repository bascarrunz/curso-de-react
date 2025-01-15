function SearchBar() {
    return (
        <form style={{textAlign: 'left'}}>
            <input type="text" placeholder="Search..." />
            <hr />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
            <hr />
        </form>
    );
}

export default SearchBar;
