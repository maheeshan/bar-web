import React from 'react';
import Navbar from './NavBar';
import { render } from "@testing-library/react";
import {screen} from "@testing-library/react";

describe('Spec Navbar', function () {
    it('it exists', () => {
        render(<Navbar/>)

        const navbar = screen.getByText("Bar");

        expect(navbar).toBeInTheDocument()
    });
});
