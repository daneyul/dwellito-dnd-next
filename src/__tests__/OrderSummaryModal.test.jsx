/* eslint-disable no-undef */
// src/components/OrderSummaryModal/Container/OrderSummaryModal.test.jsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { OrderSummaryModal } from '@/components/OrderSummaryModal/Container/OrderSummaryModal';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import { SessionLengthContext } from '@/utils/contexts/SessionLengthProvider';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
jest.mock('@/utils/hooks/containers/useSaveSelections', () => () => ({
  convertedSelections: 'mocked_encoded_data',
}));

describe('OrderSummaryModal Component', () => {
  const mockData = {
    containerHeightIsStandard: true,
    selectedContainerHeight: 'standard',
    orderTotal: 1000,
    selectedComponents: [],
    selectedContainer: {},
    scaleFactor: 1,
    interiorFinish: { name: 'None', price: 0 },
    interiorFinishPrice: 100,
    exteriorFinish: { name: 'White', price: 200, img: 'basic.png' },
    flooring: { name: 'Timber', price10: 50, price20: 100, price40: 150, img: 'wood.png' },
    slug: '20',
    dialogOpen: true,
    setDialogOpen: jest.fn(),
    supplier: 'custom-cubes',
  };

  const mockSessionLength = {
    sessionLength: 30,
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('sends correct data to Zapier on form submission', async () => {
    fetchMock.mockResolvedValueOnce({ ok: true });

    render(
      <ContainerDataContext.Provider value={mockData}>
        <SessionLengthContext.Provider value={mockSessionLength}>
          <OrderSummaryModal />
        </SessionLengthContext.Provider>
      </ContainerDataContext.Provider>
    );

    // Fill out the form fields
    fireEvent.change(screen.getByPlaceholderText('Property Address'), {
      target: { value: '123 Main St' },
    });
    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'john.doe@example.com' },
    });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });

    // Verify fetch was called with the correct body containing "containerHeight"
    expect(fetchMock).toHaveBeenCalledWith(
      'https://hooks.zapier.com/hooks/catch/18577479/2yjklei/',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('"containerHeight":"standard"'),
      })
    );
  });

  it('renders OrderSummaryModal component', () => {
    render(
      <ContainerDataContext.Provider value={mockData}>
        <SessionLengthContext.Provider value={mockSessionLength}>
          <OrderSummaryModal />
        </SessionLengthContext.Provider>
      </ContainerDataContext.Provider>
    );

    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Exterior Finish')).toBeInTheDocument();
    expect(screen.getByText('Interior Finish')).toBeInTheDocument();
    expect(screen.getByText('Flooring')).toBeInTheDocument();
  });

  it('closes the dialog when submit button is clicked', async () => {
    render(
      <ContainerDataContext.Provider value={mockData}>
        <SessionLengthContext.Provider value={mockSessionLength}>
          <OrderSummaryModal />
        </SessionLengthContext.Provider>
      </ContainerDataContext.Provider>
    );

    const addressInput = screen.getByPlaceholderText('Property Address');
    fireEvent.change(addressInput, { target: { value: '123 Main St' } });
  
    const firstNameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
  
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  
    await act(async () => {
      const submitButton = screen.getByText('Submit');
      fireEvent.click(submitButton);
    });

    expect(mockData.setDialogOpen).toHaveBeenCalledWith(false);
  });
});