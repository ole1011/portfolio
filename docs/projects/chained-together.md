---
title: Chained Together
---

# 🔗 Chained Together

Chained Together is a Minecraft plugin that introduces a unique cooperative twist by linking players together with a virtual chain. Developed as a trial project for Cytooxien, it challenges players to work together, making every move a coordinated effort.

> [!NOTE]
> This project was developed in collaboration with my good friend [ImGxrke](https://github.com/ImGxrke).

## Purpose

This project implements a chain system designed to recreate the game 'Chained Together' in Minecraft. By connecting players, the plugin fosters teamwork and strategy, requiring cooperation to navigate the game effectively.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ole1011/chained-together.git
   ```
2. **Build the Project:**
   ```bash
   ./gradlew build
   ```
3. **Deploy the Plugin:**
    - Copy the generated JAR file from the `build/libs` directory to your server's plugin folder.
4. **Start Your Server:**
    - Launch the server to load the plugin.

## Usage

- **Invite a Player:**
  Right-click a player to send an invitation. They can accept by right-clicking you back.
- **Select Difficulty:**
  After acceptance, the invitor chooses a difficulty level. The selected difficulty determines the chain's length.
- **Move Together:**
  Players can pull their partner toward them using the offhand key (default: F).
- **Disband the Chain:**
  Sneak and right-click your partner to break the chain.

## Screenshots

> [!IMPORTANT]
> Please note that while the site documentation is in English, the text in the images is in German. Additionally, this project is no longer maintained and was built for Paper version 1.21.1.

### Cooperative Invitation
This screenshot shows the target perspective when sending a chain invitation.
![Cooperative Invitation](/chained_together_coop_request.png)

### Difficulty Selection
Visualize the interface for choosing the chain difficulty.
![Difficulty Selection](/chained_together_difficulty.png)

### Post-Selection Hint
After the difficulty is chosen, a hint appears to guide players.
![Post-Selection Hint](/chained_together_hint.png)

### Active Chain Connection
See the active chain connecting two players, complete with a bottom hint.
![Active Chain Connection](/chained_together_chain.png)

---

For more projects and additional details, visit the [Projects](/projects) page or reach out via the [Contact](/contact) page.
