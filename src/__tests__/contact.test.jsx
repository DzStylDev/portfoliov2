import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { act } from "react"
import Contact from "../components/Contact"

beforeEach(() => {
    // Mock de fetch pour tous les tests
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Success' }),
      })
    );
  });
  
  afterEach(() => {
    jest.clearAllMocks(); // Réinitialise les mocks après chaque test
  });

test("Envoye d'email via une soumission d'un formulaire", async () => {
    
    
    await act(async () => {
            const onSubmit = jest.fn(); // Fonction mock pour tester la soumission
            render(<Contact onSubmit={onSubmit} />); // Rendu du composant
            
        });


        let nameVal = "John Doe"
        let emailVal = "john@tes.fr"
        let messageVal = "Test message"

        const input =  await screen.findByPlaceholderText('Enter Name');
        const email =  await screen.findByPlaceholderText('Enter Email');
        const message =  await screen.findByPlaceholderText('Enter Message');

        
        fireEvent.change(input, { target: { value: nameVal } });
        fireEvent.change(email, { target: { value: emailVal } });
        fireEvent.change(message, { target: { value: messageVal  } });

        const button = screen.getByRole('button', { name: "Envoyé"})
        fireEvent.click(button)


        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

        const fetchCall = global.fetch.mock.calls[0];
        const url = fetchCall[0];
        const options = fetchCall[1];

        expect(url).toBe('https://api.web3forms.com/submit');
        expect(options.method).toBe('POST');

        const formData = options.body;
        expect(formData instanceof FormData).toBe(true);

        expect(formData.get('prenom')).toBe(nameVal); 
        expect(formData.get('email')).toBe(emailVal);
        expect(formData.get('message')).toBe(messageVal);

})