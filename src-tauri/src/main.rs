#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::api::notification::Notification;
use tauri::generate_context;

#[tauri::command]
fn send_notification(title: String, body: String) {
    Notification::new("studio.tauri.gg")
        .title(title)
        .body(body)
        .show();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![send_notification])
        .run(generate_context!())
        .expect("error while running tauri application");
}
