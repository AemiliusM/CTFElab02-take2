import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

describe('Query test', () => {
    it('takes in query and confirms state change', () => {
        const { asFragment } = render(
            <Controls 
                onSubmit='ca' value='ca' onCountryChange='ca'
                />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});