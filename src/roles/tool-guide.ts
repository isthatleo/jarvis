/**
 * Tool Guide — Static reference for the AI
 *
 * Explains all available tools and how to use them.
 * Update this file whenever tools are added or changed.
 */

export const TOOL_GUIDE = `# Tool Guide

## Terminal & File Operations

These tools work locally by default. To run on a remote machine, pass the \`target\` parameter with a sidecar name or ID.

### run_command
Execute a shell command. Returns stdout, stderr, and exit code.
- \`command\` (required): The shell command to run
- \`target\`: Sidecar name or ID for remote execution
- \`cwd\`: Working directory
- \`timeout\`: Timeout in ms (default: 30000)

### read_file
Read a file's contents as text (max 100KB).
- \`path\` (required): File path
- \`target\`: Sidecar name or ID for remote read

### write_file
Write content to a file (creates or overwrites).
- \`path\` (required): File path
- \`content\` (required): Content to write
- \`target\`: Sidecar name or ID for remote write

### list_directory
List directory contents with types and sizes.
- \`path\` (required): Directory path
- \`target\`: Sidecar name or ID for remote listing

## Browser

Control a Chrome browser for web research and interaction. Chrome auto-launches on first use. A persistent profile at ~/.jarvis/browser/profile retains login sessions.

Workflow:
1. \`browser_navigate\` to a URL — returns page text + interactive elements with [id] numbers
2. \`browser_click\` / \`browser_type\` to interact using element [id]s
3. \`browser_snapshot\` to see the page after an action
4. \`browser_scroll\` to reveal content below the fold
5. \`browser_evaluate\` for advanced JavaScript interactions
6. \`browser_screenshot\` for visual capture

Rules:
- For READ-ONLY tasks, \`browser_navigate\` already returns content. Don't snapshot just to read.
- For INTERACTIVE tasks, snapshot after each action to verify.
- Fill forms FIRST, verify in snapshot, THEN submit.
- If an element isn't visible, scroll down first.
- Modern SPAs may need \`browser_evaluate\` for custom components.

## Sidecars (Remote Machines)

Sidecars are the user's other machines (laptops, servers, desktops) connected to the brain. They allow you to run commands, read/write files, and more on remote devices.

### How to use sidecars
1. Call \`list_sidecars\` to see which machines are available and their connection status
2. Use any compatible tool with the \`target\` parameter set to the sidecar's name or ID
3. If the sidecar is offline or doesn't support the required capability, you'll get a clear error

### list_sidecars
Query live sidecar status. Always call this before targeting a remote machine.
- \`filter\`: Optional string to filter by name or ID (case-insensitive)
- Returns: connection status, hostname, OS, capabilities, last seen time

### Capabilities
Each sidecar advertises what it can do:
- \`terminal\` — supports \`run_command\`
- \`filesystem\` — supports \`read_file\`, \`write_file\`, \`list_directory\`
- \`screenshot\`, \`clipboard\`, \`desktop\`, \`browser\`, \`system_info\` — future use

### Example workflow
User: "Check disk space on my server"
1. Call \`list_sidecars\` → see "home-server" is CONNECTED with terminal capability
2. Call \`run_command\` with target="home-server", command="df -h"
3. Report results to user

## Desktop Automation (Windows)

Control Windows desktop applications via the desktop-bridge sidecar (FlaUI). Works like browser tools but for native Windows apps.

- \`desktop_snapshot\` — capture current window's UI elements
- \`desktop_click\` / \`desktop_type\` — interact by element [id]
- \`desktop_open_app\` — launch an application
- \`desktop_switch_window\` — switch to a window by title
- \`desktop_list_windows\` — list open windows
- \`desktop_screenshot\` — visual capture
- \`desktop_scroll\` — scroll within a window
- \`desktop_hotkey\` — send keyboard shortcuts

## Task Management

### manage_goals
OKR-style goal management (create, list, score, decompose, morning plan, evening review).

### manage_workflow
Create and run automation workflows from natural language.

### delegate_task
Send a task to a specialist sub-agent (research analyst, software engineer, etc.). The specialist works independently and returns results.

### manage_agents
Manage persistent background agents for long-running tasks.

## Other Tools

### research_queue
Queue topics for background research during idle time.

### commitments
Track promises and tasks with due dates.

### content_pipeline
Manage content items through drafting stages.
`;
