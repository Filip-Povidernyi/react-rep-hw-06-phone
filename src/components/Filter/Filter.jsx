import React from "react";
import Input from "components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";


const Filter = () => {

    const dispatch = useDispatch()
    const handlerChange = (evt) => {
        dispatch(setFilter(evt.target.value));
    };
    const filter = useSelector(getFilter);

    return (
        <>
            <p>Find contacts by name</p>
            <Input change={handlerChange} type="text" name="filter" placeholder="Search contacts" value={filter} />
        </>
    );
};


export default Filter;