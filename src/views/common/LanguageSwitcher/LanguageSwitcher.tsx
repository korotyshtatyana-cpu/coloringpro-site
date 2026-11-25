import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../../controllers/LocaleContext';
import { Locale } from '../../../models/LocaleModel';
import { GlobeIcon } from '../Icons/GlobeIcon';
import { ChevronDownIcon } from '../Icons/ChevronDownIcon';
import { CheckCircleIcon } from '../Icons/CheckCircleIcon';

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, options, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = Math.max(
    options.findIndex((option) => option.code === locale),
    0,
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    optionRefs.current[activeIndex]?.focus();
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex]);

  const openMenu = () => {
    setIsOpen(true);
  };

  const handleSelect = (next: Locale) => {
    setLocale(next);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const current = optionRefs.current.findIndex((element) => element === document.activeElement);
    const last = options.length - 1;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      optionRefs.current[current < 0 ? 0 : (current + 1) % options.length]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      optionRefs.current[current <= 0 ? last : current - 1]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      optionRefs.current[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      optionRefs.current[last]?.focus();
    }
  };

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        ref={triggerRef}
        className={`language-switcher__trigger ${isOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={t('common.language')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
      >
        <GlobeIcon />
        <span>{locale.slice(0, 2).toUpperCase()}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div
          className="language-switcher__menu"
          id="language-menu"
          role="listbox"
          aria-label={t('common.language')}
          onKeyDown={handleMenuKeyDown}
        >
          <span className="language-switcher__caption">{t('common.language')}</span>
          {options.map((option, index) => {
            const isActive = option.code === locale;
            return (
              <button
                key={option.code}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                className={`language-switcher__option ${isActive ? 'is-active' : ''}`}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(option.code)}
              >
                <span className="language-switcher__name">{option.nativeName}</span>
                <span className="language-switcher__code">
                  {option.code.slice(0, 2).toUpperCase()}
                </span>
                {isActive && <CheckCircleIcon className="language-switcher__check" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
