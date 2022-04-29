/**
 * This file contain all functions from rust backend
 * Prefix start with `Call`
 */

import { invoke } from '@tauri-apps/api';

const CallSendNotification = (title: string, body: string) => {
  void invoke('send_notification', { title, body });
};

export { CallSendNotification };
