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

export { useAdminData,useTenantData }
