#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::api::notification::Notification;
use tauri::generate_context;
use tauri::{Manager, Menu, MenuItem, Submenu, Window};
use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};

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

/**
 * This will make blur effect in window app
 */
fn window_effect(window: Window) {
    #[cfg(target_os = "macos")]
    apply_vibrancy(&window, NSVisualEffectMaterial::Sidebar)
        .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

    #[cfg(target_os = "windows")]
    apply_blur(&window, Some((18, 18, 18, 125)))
        .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
}

fn main() {
    let submenu = Submenu::new("File", Menu::new().add_native_item(MenuItem::Quit));
    let menu = Menu::new().add_submenu(submenu);

    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            window_effect(window);
            Ok(())
        })
        .menu(menu)
        .invoke_handler(tauri::generate_handler![send_notification])
        .run(generate_context!())
        .expect("error while running tauri application");
}
