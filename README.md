# Knack Application-Cleaner

## Overview
`application-cleaner` is a command line tool designed to help clean Knack applications. This tool provides a deduplication feature, enabling users to remove duplicated data in their applications with various strategies and algorithms.

## Installation

Before installing `application-cleaner`, ensure that you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download and install them from [Node.js official website](https://nodejs.org/).

To install `application-cleaner`, follow these steps:

1. Clone the repository to your local machine (assuming `git` is installed):
    ```bash
    git clone https://github.com/garfenter/application-cleaner.git
    ```

2. Navigate to the cloned directory:
    ```bash
    cd application-cleaner
    ```

3. Install the required npm packages:
    ```bash
    npm install
    ```

## Running the Tool

To run `application-cleaner`, use the following command syntax in your terminal or command prompt:

```bash
npm run build
node build/index.js dedup <file> [options]
```
### Command Options

- `<file>`: Path to the Application file you want to clean.
- `-s, --strategy <strategy>`: Deduplication strategy. Possible values:
  - `keep_first`: Keeps the first occurrence and removes duplicates.
  - `keep_last`: Keeps the last occurrence and removes duplicates.
  - `just_flag`: Flags duplicates without removing them.
- `-a, --algorithm <algorithm>`: Deduplication algorithm to use. Currently, the only available algorithm is `simple_map`.
- `-d, --dry-run`: Performs a dry run without creating the output file.
- `-o, --output <output>`: Specifies the path for the output file where the cleaned data will be saved.

### Examples

Deduplicate an application file, keeping the first occurrence of each duplicate:

```bash
node index.js dedup "mock_application.json" --strategy keep_first
```

Perform a dry run using the just_flag strategy:

```bash
node index.js dedup "mock_application.json" --strategy just_flag --dry-run
```

## Development

To run tests or build the project, you can use the following npm scripts:

Test: Run `npm test` to execute tests using Jest.
Build: Run `npm run build` to build the project with TypeScript
