import { create } from 'zustand'

const useAdminData = create((set) => ({
    admin: null,
    setAdmin: (admin) => set((state) => ({ admin:admin })),
    unsetAdmin: () => set({ admin:null }),
}))

const useTenantData = create((set) => ({
    tenant: null,
    setTenant: (tenant) => set((state) => ({ tenant:tenant })),
    unsetTenant: () => set({ tenant:null }),
}))


const useCartStore = create((set) => ({
    cart:[],
    addToCart:(item) =>
        set((state) => {
            const existingItem = state.cart.find((cartItem) => cartItem.name === item.name);
            if (existingItem) {
                return {
                    cart: state.items.map((cartItem) =>
                        cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return { cart: [...state.cart, { ...item, quantity: 1 }] };
            }
        }),
    removeCart: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item.name !== itemId) })),
    clearCart: () => set({ cart: [] }),
    addQuantity: (itemId) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.name === itemId ? { ...item, quantity: item.quantity + 1 } : item
            ),
        })),
    reduceQuantity:(itemId) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.name === itemId ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 } : item
            ),
        })),
}))

export { useAdminData,useTenantData,useCartStore }
