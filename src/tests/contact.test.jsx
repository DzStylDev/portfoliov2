import { render, screen, fireEvent } from "@testing-library/react"
import Contact from "../components/Contact"
import { act } from "react"

test("Should diplay modal on the screen when submitted form", () => {
    render(<Contact />)
    
    act(() => {
        
        const nom = screen.getAllByRole("textbox", {name: 'Name'})
        const email = screen.getAllByRole("textbox", {name: 'Email'})
        const message = screen.getAllByRole("textbox", {name: 'Message'})
        
        const button = screen.getByRole('button', {
            name: 'Envoyé'
        })
        // fireEvent.change(nom, {
            //     target: {
                //         value: ""
                //     }
                // })
                // fireEvent.click(button) 
    })
})