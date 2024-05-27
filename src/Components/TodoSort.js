import React from 'react'

const TodoSort = ({ handleSort, handleSearch }) => {
    const handleChange = (e) => {
        handleSort(e.target.value);
    };

    const handleSearchChange = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div className='todoSort'>
            <select onChange={handleChange}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
            </select>

            <input
                type="text"
                placeholder="Search todos..."
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default TodoSort