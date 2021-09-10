import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react'

const SelectForm = () => {
    const [count, setCount] = useState("1");
    const handleChange = (event) => {
        setCount(event.target.value)
        console.log(count);
    }
    return (
        <div>
            <FormControl variant="outlined">
                <InputLabel>Months</InputLabel>
                <Select label="Months" value={count} onChange={handleChange}>
                    <MenuItem value="1">JAN </MenuItem>
                    <MenuItem value="2">FEB</MenuItem>
                    <MenuItem value="3">MAR</MenuItem>
                </Select>
            </FormControl>
        </div >
    )
}

export default SelectForm;
