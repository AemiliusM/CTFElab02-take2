import React from 'react';

export default function Controls({
    country,
    onCountryChange,
    onSubmit,}) 
    {
    return (
        <form onSubmit={onSubmit}>
        <label htmlFor='country'>Country</label>
        <input 
        id='country'
        name='country'
        type='text'
        value={country}
        onChange={onCountryChange}
        />
        <button aria-label='get-articles'>Select from Country</button>
        </form>
    )
}