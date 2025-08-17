import { useState, useEffect } from 'react';

export function usePasswordStrength(password) {
  const [strength, setStrength] = useState('');

  useEffect(() => {
    if (!password) {
      setStrength('');
      return;
    }

    if (password.length < 6) {
      setStrength('Weak');
    } else if (/[A-Za-z]/.test(password) && /[0-9]/.test(password)) {
      if (/[!@#$%^&*]/.test(password) && password.length >= 8) {
        setStrength('Strong');
      } else {
        setStrength('Medium');
      }
    } else {
      setStrength('Weak');
    }
  }, [password]);

  return strength;
}