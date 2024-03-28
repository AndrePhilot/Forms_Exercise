import { render, fireEvent } from '@testing-library/react';
import Box from './Box.jsx';

it("should add new Box when Submit button is clicked", () => {
    const { getByText, queryByTestId } = render(<Box />);
    
    // Ensure that initially the Box component is not present
    expect(queryByTestId("box")).not.toBeInTheDocument();

    // Click the submit button
    fireEvent.click(getByText("Submit"));

    // Ensure that after clicking the submit button, the Box component is present
    expect(queryByTestId("box")).toBeInTheDocument();
});


// it('renders without crashing', () => {
//     render(<Box />);
// });