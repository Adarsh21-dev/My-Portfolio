---
title: Bulk File Rename System
subtitle: A desktop utility application designed to rename large batches of files simultaneously using customizable patterns and logic rules.
date: May 30, 2023
author: Adarsh Kumar
status: Completed
status_color: completed
cover_image: ../assets/project3.png
tools: ["Python", "CustomTkinter", "OS Module", "File System APIs"]
github: https://github.com/Adarsh21-dev/BulkFileRenameSystem
playstore: N/A (Desktop Application)
---

## 🛠️ Project Description
A desktop application developed as a final year college project to simplify the process of renaming large numbers of files simultaneously. It allows users to define custom patterns and rules for renaming, improving efficiency for tasks involving bulk file management.

From managing photography sets to preparing large programming assets, renaming hundreds of files manually is tedious and error-prone. This software provides an intuitive graphical user interface (GUI) that processes directory file lists in milliseconds, rendering an live preview before executing physical disk write actions.

---

## ⚖️ Pros and Cons

### Pros:
*   **Massive Time Saver:** Significantly speeds up the process of renaming multiple files in batches.
*   **Intuitive UI/UX:** Built on top of CustomTkinter to provide a beautiful, dark-themed, modern responsive layout.
*   **Flexible Pattern Matching:** Offers flexibility through custom patterns (adds prefix/suffix, replaces specific substrings, and implements zero-padded sequential numbering).
*   **Fail-safe Preview:** Dynamic table displays changes on the fly so users see exactly what the final names look like before applying them.

### Cons:
*   **Desktop Limitation:** Formatted and compiled primarily for desktop operating systems (Windows/macOS) based on Python runtime environments.
*   **Basic Text Rules:** Lacks advanced regular expression (Regex) processing patterns in the initial release.
*   **Failsafe Limitations:** Missing a robust global "Undo" database log to roll back renames once committed to the disk storage.

---

## ⚙️ Tools and Frameworks Used
*   **Python:** Used as the programming language, ensuring easy OS library integrations and robust computational parsing logic.
*   **CustomTkinter:** Used for designing a dark-themed responsive GUI that matches modern operating system design patterns.
*   **OS Module:** Leveraging low-level Python OS and System libraries for lightning-fast directory traversal and filename mutation queries.

---

## ⚡ Features and Functionalities
*   **Select Directory:** Easy file-browser dialogue to select the target folder.
*   **Renaming Rules Builder:** Add custom prefixes, suffixes, replace specific words, or append progressive counter numbers (e.g. `image_01.jpg`).
*   **Live Preview Table:** Instantly updates a spreadsheet-style visual column showcasing the original name alongside the proposed new name.
*   **Safe Execution:** Only writes mutations when the user clicks the "Rename" confirmation command.
*   **Error Prevention:** Alerts users about potential file collisions or duplicate filenames before writing changes.

---

## 🔮 Future Enhancements
*   Adding support for advanced regular expressions (RegEx) in parsing criteria.
*   Implementing an "Undo" operation using an internal transactions database.
*   Building compiled, zero-dependency standalone installers (`.exe` / `.dmg`) for easier deployment.
