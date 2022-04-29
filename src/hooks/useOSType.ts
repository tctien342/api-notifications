import { os } from '@tauri-apps/api';
import { LiteralUnion } from 'prettier';
import { useEffect, useState } from 'react';

export const useOSType = () => {
  const [crrOS, setOS] = useState<LiteralUnion<'Linux' | 'Darwin' | 'Windows_NT', string>>('Linux');

  useEffect(() => {
    void os
      .type()
      .then((os) => {
        setOS(os);
      })
      .catch(console.log);
  }, []);

  return crrOS;
};
