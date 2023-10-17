# Tauri WebRTC MacOS Permissions

```bash 
# Install dependencies
npm i
# Ensure you have both targets
rustup target add aarch64-apple-darwin
rustup target add x86_64-apple-darwin
```

On macOS run the single architecture build

```bash
npm run build:x86_64
npm run build:aarch64
npm run build:universal
```

## Single architecture works

Run either of the architecture build (`src-tauri/target/x86_64-apple-darwin/release/bundle/macos` or `src-tauri/target/aarch64-apple-darwin/release/bundle/macos`).

Click Connect and you will be prompted **once** for Microphone permission.

Then success (`GotUserMedia: media stream`).

## Universal apps

Close the app, launch the univeral build (under `src-tauri/target/universal-apple-darwin/release/bundle/macos`).

You'll be prompted about **five times**.

Then success (`GotUserMedia: media stream`).