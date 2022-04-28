#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::api::notification::Notification;
use tauri::generate_context;

#[tauri::command]
#[allow(unused_must_use)]
fn send_notification(app_handle: tauri::AppHandle, title: String, body: String) {
    let config = app_handle.config();
    let path = tauri::api::path::app_dir(&config).clone();
    let path_cl = path.unwrap().as_path().to_str().unwrap_or("").to_string();

    println!("{}", path_cl);
    Notification::new("studio.tauri.gg")
        .title(title)
        .body(body)
        .icon(path_cl)
        .show();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![send_notification])
        .run(generate_context!())
        .expect("error while running tauri application");
}
