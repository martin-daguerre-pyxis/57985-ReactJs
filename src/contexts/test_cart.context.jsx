import { render, screen } from '@testing-library/react';
import { CartProvider, useCart } from './cart.context';
import { renderHook, act } from '@testing-library/react-hooks';

describe('CartProvider', () => {
  it('renders children', () => {
    render(
      <CartProvider>
        <div>Child component</div>
      </CartProvider>
    );

    const childComponent = screen.getByText('Child component');
    expect(childComponent).toBeInTheDocument();
  });

  it('adds item to cart', () => {
    const item = { id: 1, name: 'Test item', price: 10, quantity: 1 };
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(item);
    });

    expect(result.current.cart).toContainEqual(item);
  });

  it('removes item from cart', () => {
    const item = { id: 1, name: 'Test item', price: 10, quantity: 1 };
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(item);
      result.current.removeFromCart(item.id);
    });

    expect(result.current.cart).not.toContainEqual(item);
  });

  it('updates item quantity in cart', () => {
    const item = { id: 1, name: 'Test item', price: 10, quantity: 1 };
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(item);
      result.current.updateCart({ ...item, quantity: 2 });
    });

    expect(result.current.cart).toContainEqual({ ...item, quantity: 2 });
  });

  it('clears cart', () => {
    const item = { id: 1, name: 'Test item', price: 10, quantity: 1 };
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(item);
      result.current.clearCart();
    });

    expect(result.current.cart).toHaveLength(0);
  });
});