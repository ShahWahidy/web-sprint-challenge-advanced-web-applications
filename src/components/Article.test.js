import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from '@testing-library/react' 

import Article from './Article';

const dummyData = {
    id:"1",
    headline: "Breaking News",
    author: "Uknown",
    summary: "Good Stuff",
    body: "aint got nothing on me"
}
const dummyDataWithoutAuthor = {
    id:"1",
    headline: "Breaking News",
    summary: "Good Stuff",
    body: "aint got nothing on me"
}
test('renders component without errors', ()=> {
    render(<Article article={dummyData}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article  article={dummyData}/>)

    const headline = screen.queryByTestId(/headline/i);
    const author = screen.queryByTestId(/author/i);
    const summary =  screen.queryByTestId(/summary/i);
    const body = screen.queryByTestId(/body/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();

});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={dummyDataWithoutAuthor}/>)

    const author = screen.queryByTestId(/author/i)

    expect(author).toBeInTheDocument();
    expect(author).toHaveTextContent(/Associated Press/i)
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();
    
    render(<Article handleDelete={handleDelete} article={dummyData}/> )

    const button = screen.getByTestId(/deleteButton/i)
    userEvent.click(button)

    waitFor(() => {
        expect(handleDelete).toHaveBeenCalled();
    })

});

//Task List: 
//1. Complete all above tests. Create test article data when needed.