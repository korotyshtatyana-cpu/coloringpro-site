import { useState, useCallback } from 'react';

export interface FaqControllerState {
  openId: string | null;
  toggleItem: (id: string) => void;
  isOpen: (id: string) => boolean;
}

export function useFaqController(): FaqControllerState {
  const [openId, setOpenId] = useState<string | null>(null);

  // Opening one item closes the previously opened one.
  const toggleItem = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const isOpen = useCallback((id: string) => id === openId, [openId]);

  return {
    openId,
    toggleItem,
    isOpen,
  };
}
