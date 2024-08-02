# Dataset Gallery Formatter

Dataset Gallery Formatter is a tool written in TypeScript with Bun, designed to format the tag `.txt` files created by [gallery-dl](https://github.com/mikf/gallery-dl) for boorus and Pixiv when executed with the `--write-tags` flag. This tool also notifies you if the processed `.txt` file contains untranslated (Japanese) tags.

## Features

- **Prefix Addition**: Add a custom tag to all files as a trigger word.
- **Tag Removal**: Automatically remove specified tags from the files.
- **Directory Processing**: Specify the directory containing the files to process/replace.
- **Untranslated Tag Notification**: Get notified (logged to console) if there are untranslated (Japanese) tags in the processed files.

## Why Use This Tool?

I developed Dataset Gallery Formatter as an alternative to WaifuC, which didn't work for me due to an `onnxruntime` error, despite having the correct CUDA version installed.

## Installation

### Using the Executable

1. Download the latest `.exe` file from the [releases page](https://github.com/shimizu-izumi/dataset-gallery-formatter/releases).
2. Place the executable in your desired directory.

### Building from Source

1. Make sure you have [Bun](https://bun.sh/) installed.
2. Clone this repository:
    ```sh
    git clone https://github.com/shimizu-izumi/dataset-gallery-formatter.git
    cd dataset-gallery-formatter
    ```
3. Install the dependencies:
    ```sh
    bun install
    ```
4. Build the project:
    ```sh
    bun build
    ```

## Usage

### Options

- `--prefix <string|optional>`: Add a custom tag to all files as a trigger word.
- `--infix <array|optional>`: Tags that should be removed if present in the files (specified as a string array in the code).
- `--location <string>`: Specify the directory with the files to process/replace.

### Examples

1. **Using the Executable**:
    ```sh
    dataset-gallery-formatter.exe --prefix "custom_tag" --infix "tag1" "tag2" "tag3" --location "C:\path\to\directory"
    ```

2. **Using Bun**:
    ```sh
    bun run index.ts --prefix "custom_tag" --infix "tag1" "tag2" "tag3" --location "C:/path/to/directory"
    ```

### Notifications

If the tool detects any untranslated (Japanese) tags in the processed files, it will notify (log to console) you with a list of these tags.

## Development

### Running Tests

There are no tests, this was purely tested on a dataset I'm working on as I don't know how to write tests yet.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## Contact

If you encounter any issues or have any questions, please open an issue.

---

Happy formatting!