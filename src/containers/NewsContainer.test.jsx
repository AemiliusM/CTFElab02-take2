import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NewsContainer from './NewsContainer';


describe('shows news articles', () => {
    it('should display a list of articles', async () => {
        render(<NewsContainer/>);

        screen.getByText('Loading your Articles!');

        const ul = await screen.findByRole('list', {name: 'articles'});
        expect(ul).toMatchSnapshot();

        const countryInput = await screen.findByLabelText('Country')
        userEvent.type(countryInput, 'ca');

        const submitButton = await screen.findByRole('button', {name: 'get-articles'});
        userEvent.click(submitButton);

        return waitFor(() => {
            const articles = screen.getAllByText('Title', 
            {exact: false});

            expect(articles).toHaveLength(5)
        });

    });
});