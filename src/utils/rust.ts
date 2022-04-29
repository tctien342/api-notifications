/*
 * This file contain all functions from rust backend
 * Prefix start with `Call`
 */

import { invoke } from '@tauri-apps/api';
import { appWindow } from '@tauri-apps/api/window';

const CallSendNotification = (title: string, body: string) => {
  void invoke('send_notification', { title, body });
};

const CallDragging = async () => {
  await appWindow.startDragging();
};

export { CallDragging, CallSendNotification };
