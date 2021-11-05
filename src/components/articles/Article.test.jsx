import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('article test yo!', () => {
    it('should render a single article', () => {
        const { asFragment } = render(
            <Article 
                title='Something, something, something, darkside'
                author='robot chicken'
                description='skit'
                />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});