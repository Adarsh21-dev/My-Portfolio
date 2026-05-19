---
title: MyVibeNote — The Emotion's Journal
subtitle: Capture the Vibe, Keep the Memory. Because every thought has a color, and every memory has a soul.
date: May 19, 2026
author: Adarsh Kumar
status: Completed
status_color: completed
cover_image: ../assets/project1.png
tools: ["Kotlin", "Jetpack Compose", "Room Persistence", "MVVM + Clean Architecture", "Glassmorphism"]
github: https://github.com/Adarsh21-dev/MyVibeNotes/tree/main
playstore: N/A (Local First)
---

## 🌟 1. The Core Philosophy: What is MyVibeNote?
**MyVibeNote** is a premium, state-of-the-art Android journaling sanctuary. It moves beyond static text to capture the "vibe" of a moment, ensuring that your emotional state is preserved alongside your words for eternity. 🧠💖

*   **Dynamic Adaptation:** Unlike traditional apps with fixed themes, MyVibeNote is a "living" interface. It uses a reactive state-management system to change its entire color palette, transparency levels, and typography based on the user's current mood selection. This ensures the app always "feels" like you.
*   **Emotional Archiving:** The app acts as an emotional time machine. When you look back at a note from months ago, the very color of the screen (e.g., Joyful Amber or Melancholy Steel Blue) instantly teleports your brain back to how you felt in that exact moment. It provides context that words alone cannot convey.
*   **Mindfulness & Serenity:** Every pixel is architected to reduce digital noise. The glassmorphic aesthetics and smooth animations create a "Safe Space" that encourages users to be honest with their thoughts, facilitating a deeper connection with one's inner self.

<div style="display: flex; justify-content: center; gap: 16px; margin: 30px 0; flex-wrap: wrap;">
  <img src="../assets/project (9).png" alt="About Top" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
  <img src="../assets/project (10).png" alt="About Bottom" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
</div>
<p style="text-align: center; font-size: 0.9rem; color: #888; margin-top: -15px; font-style: italic; margin-bottom: 30px;">MyVibeNotes Brand Vision (Left) & Developer Privacy Promise Layout (Right)</p>

---

## 🛠 2. Technical (Deep Tech Stack)

| Category | Technology & Rationale |
| :--- | :--- |
| **Language** | **Kotlin**: Utilizing Coroutines for non-blocking UI and Flow for reactive data streams. Ensures high responsiveness even with complex animations. 🧩 |
| **UI Framework** | **Jetpack Compose (v2.2.10)**: A declarative UI approach allowing for complex, high-performance animations and seamless "Mood-Based Theming." 🎨 |
| **Architecture** | **MVVM + Clean Architecture**: Ensures a bug-free, scalable application by separating the "Brain" (ViewModel) from the "Body" (UI). 🏛️ |
| **Local Database** | **Room Persistence (v2.7.0)**: High-performance SQLite layer for instant memory saving. 100% local for total privacy. 📦 |
| **Data Persistence** | **Jetpack DataStore (v1.1.7)**: Modern, thread-safe solution for handling advanced editor settings and user preferences. 🔑 |
| **Image Loading** | **Coil (v2.7.0)**: Efficient, Kotlin-first image loading library for note attachments and thumbnails. 🖼️ |
| **PDF Engine** | **PDFBox-Android (v2.0.27.0)**: Professional PDF generation engine supporting active links, multi-page layouts, and mood-based styling. 📄 |
| **Min API Level** | **Android 11 (API 30)**: Targeted at modern hardware to utilize advanced system features like Edge-to-Edge displays and blurring effects. 📱 |
| **Target API Level** | **Android 15 (API 37)**: Fully optimized for the latest Android OS, including support for 16KB page sizes and the latest security protocols. 🚀 |
| **Design Language** | **Material 3 + Glassmorphism**: Custom UI engine blending "Material You" with premium "Frosted Glass" aesthetics and floating animations. 🧪 |

---

## 📱 3. Deep Screen-by-Screen Analysis

### 🏠 Home Screen: The Emotional Dashboard
*   **The Experience:** This is the heart of the app. Notes are displayed in "Glassmorphic Cards" that glow with their respective mood colors. It provides an instant visual overview of your recent emotional history.
*   **Integrated Navigation:** Features a custom bottom navigation bar providing quick access to **Settings**, **Insights**, and **About** screens.
*   **Multi-Mood Filtering:** Interactive "Mood Chips" allow users to filter their journey by multiple emotions simultaneously.
*   **Intelligent Search:** Real-time search scanning titles instantly. Graceful "Not Found" states for keywords or filters that yield no results.
*   **Swipe Gestures:** Swipe **Right to Edit** or **Left to Delete** (with a safety confirmation dialog).

<div style="display: flex; justify-content: center; gap: 16px; margin: 30px 0; flex-wrap: wrap;">
  <img src="../assets/project (2).png" alt="Empty Dashboard" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
  <img src="../assets/project (13).png" alt="Active Dashboard" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
</div>
<p style="text-align: center; font-size: 0.9rem; color: #888; margin-top: -15px; font-style: italic; margin-bottom: 30px;">Home Screen: Empty State (Left) vs Reactive Mood-based Note Entry Card (Right)</p>

### 📝 Note Entry Screen: The Creative Sanctuary
*   **The Experience:** A distraction-free environment that shifts background gradients in real-time as you select your mood.
*   **Rich Text Editor:** Supports instant markdown-like styling (Bold, Italic, Underline, Color) and real-time visual transformations.
*   **Reorderable Toolbar:** A premium feature allowing users to drag and reorder their favorite tools (Bullet lists, Timestamps, Emojis, Links, Brackets, etc.).
*   **Intelligent Lists:** Automatic prefixing for bullet points and numbered/lettered lists (`[1]`, `[A]`) upon pressing 'Enter'.
*   **Media Integration:** Modern image picker support for attaching visual memories directly to your entries.

<div style="display: flex; justify-content: center; gap: 16px; margin: 30px 0; flex-wrap: wrap;">
  <img src="../assets/project (11).png" alt="Note Editor Empty" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
  <img src="../assets/project (12).png" alt="Note Editor Input" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
</div>
<p style="text-align: center; font-size: 0.9rem; color: #888; margin-top: -15px; font-style: italic; margin-bottom: 30px;">Distraction-Free Editor with Dynamic Hue (Left) and Active Typographic Workspace (Right)</p>

### 📖 Note Read Screen: The Reflective Time Machine
*   **The Experience:** A clean, non-editable view focused on reflection. Features floating emojis and bold mood labels that set the emotional tone.
*   **Advanced Share Suite:** Professional export options including:
    *   **Image Export:** Stylized snapshots with intelligent size-warning logic.
    *   **PDF Export:** Professional documents with **Active Links**, multi-page support, and optional Insights.
    *   **Plain Text:** Quick sharing of raw thoughts.
*   **Markdown Links:** Rendered active links allow for social connectivity and external referencing directly from your journal.

<div style="display: flex; justify-content: center; margin: 30px 0;">
  <img src="../assets/project (14).png" alt="Export Vibe Suite" style="width: 48%; max-width: 260px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
</div>
<p style="text-align: center; font-size: 0.9rem; color: #888; margin-top: -15px; font-style: italic; margin-bottom: 30px;">Reflective Time Machine Sheet: Premium Export Suite Options</p>

### 📈 Insights Screen: The Emotional Laboratory
*   **The Experience:** Turns feelings into data-driven insights through beautiful visualizations.
*   **Mood Distribution Chart:** A custom Canvas-drawn bar chart showing emotional percentages.
*   **Top Emotion Spotlight:** A large, glowing card with linear gradients representing your "Dominant Vibe."
*   **Analytics Export:** One-tap PDF generation for sharing your overall emotional journey and trends.

<div style="display: flex; justify-content: center; gap: 16px; margin: 30px 0; flex-wrap: wrap;">
  <img src="../assets/project (8).png" alt="Insights Empty" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
  <img src="../assets/project (1).png" alt="Insights Charts" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
</div>
<p style="text-align: center; font-size: 0.9rem; color: #888; margin-top: -15px; font-style: italic; margin-bottom: 30px;">Insights Laboratory: Empty Setup Prompt (Left) and Canvas-rendered Distribution Analytics (Right)</p>

---

## 🎨 4. Design & UX Excellence (The Details)

*   **Glassmorphic Components:** Custom `GlassmorphicBox` with dynamic blur effects and dotted borders for a sense of depth and luxury. 💎
*   **Dynamic Animations:** 
    *   **Floating Emojis:** Custom animation engine making emojis "bob" gently for a "Living UI" feel.
    *   **Smooth Transitions:** `AnimatedContent` for seamless cross-fades and scaling during screen or mood switches.
*   **Reorderable UI:** Drag-and-drop functionality in the editor toolbar for personal workspace optimization.
*   **Edge-to-Edge Drawing:** Content flows behind status and navigation bars for a truly immersive full-screen experience.

<div style="display: flex; justify-content: center; gap: 16px; margin: 30px 0; flex-wrap: wrap;">
  <img src="../assets/project (6).png" alt="Toolbar Customization" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
  <img src="../assets/project (7).png" alt="Text Formatting Toggles" style="width: 45%; max-width: 250px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
</div>
<p style="text-align: center; font-size: 0.9rem; color: #888; margin-top: -15px; font-style: italic; margin-bottom: 30px;">Drag-and-Drop Toolbar Configuration (Left) and Core Formatting Active Filters (Right)</p>

---

## ⚙️ 5. Advanced Customization

*   **Typography:** Support for multiple font families (Serif, Monospace, Cursive) with options to apply them globally.
*   **Text Layout:** Granular control over **Font Size**, **Line Height**, and **Letter Spacing** via intuitive sliders.
*   **Visual Fidelity:** Adjustable **Glass Intensity** to control the transparency and blur levels of the interface.
*   **Export Preferences:** Customize PDF page sizes (A4, A3, A1, 1:1), export quality, and link behavior.

<div style="display: flex; justify-content: center; gap: 12px; margin: 30px 0; flex-wrap: wrap;">
  <img src="../assets/project (3).png" alt="Font Style Selection" style="width: 30%; max-width: 170px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
  <img src="../assets/project (4).png" alt="Glassmorphism Controls" style="width: 30%; max-width: 170px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
  <img src="../assets/project (5).png" alt="Text Layout Sliders" style="width: 30%; max-width: 170px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
</div>
<p style="text-align: center; font-size: 0.9rem; color: #888; margin-top: -15px; font-style: italic; margin-bottom: 30px;">Customization: App-wide Font Settings (Left), Blur Intensity Sliders (Center), and Layout Spacing Controls (Right)</p>

---

## 🛡️ 6. Security, Privacy & Reliability

*   **100% Local-First:** No cloud servers. Private thoughts stay on your device in an encrypted-ready Room database. 🔐
*   **Atomic Transactions:** Ensures data integrity even during unexpected app closures or battery depletion.
*   **Zero-Permission Trust:** Respects boundaries by requiring no invasive permissions like Contacts or Location.
