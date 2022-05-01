#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use cocoa::appkit::{NSWindow, NSWindowButton, NSWindowStyleMask};
use tauri::api::notification::Notification;
use tauri::generate_context;
use tauri::{Manager, Menu, MenuItem, Runtime, Submenu, Window};
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};

pub trait WindowExt {
    #[cfg(target_os = "macos")]
    fn set_transparent_titlebar(&self, transparent: bool);
}

impl<R: Runtime> WindowExt for Window<R> {
    #[cfg(target_os = "macos")]
    fn set_transparent_titlebar(&self, transparent: bool) {
        use cocoa::appkit::{NSEvent, NSStatusItem, NSWindowTitleVisibility};

        unsafe {
            let id = self.ns_window().unwrap() as cocoa::base::id;

            let mut style_mask = id.styleMask();

            id.standardWindowButton_(NSWindowButton::NSWindowCloseButton);

            style_mask.set(
                NSWindowStyleMask::NSFullSizeContentViewWindowMask,
                transparent,
            );

            id.setStyleMask_(style_mask);

            id.setTitleVisibility_(if transparent {
                NSWindowTitleVisibility::NSWindowTitleHidden
            } else {
                NSWindowTitleVisibility::NSWindowTitleVisible
            });
            id.setTitlebarAppearsTransparent_(if transparent {
                cocoa::base::YES
            } else {
                cocoa::base::NO
            });
        }
    }
}

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

    // Better macos titlebar
    window.set_transparent_titlebar(true);
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
