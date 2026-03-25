# English Excellence Project

This project is a single-page website for an English school that utilizes mobile-first responsive design principles,
built with a component-based architecture for easier maintainability and collaborative development.

## Project Structure

The project follows a component-based structure located in the `src/components` directory. This approach was
deliberately chosen to:

- **Minimize merge conflicts**: Developers can work on separate components without affecting the same files.
- **Improve organization**: Each component (header, footer, hero, etc.) has its own HTML and CSS files.

### Component Guidelines

When working on a component:

- **Do not include wrapper tags**: The `@@include` calls in `src/index.html` are already wrapped in semantic tags like
  `<header>`, `<footer>`, or `<section>`. Your component's HTML should only contain the content that goes *inside* these
  tags.
- **Component files**: Each component resides in its own folder under `src/components/`, containing its `.html` and
  `.css` files.

## Local Development

To set up the project locally, ensure you have [Node.js](https://nodejs.org/) installed, then:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development environment:
   ```bash
   npm run watch
   ```
   This command runs the `gulp watch` script, which automatically rebuilds the project whenever you make changes.

### Viewing the Project

**Important**: During local development, you should always open **`dist/index.html`** in your browser, not
`src/index.html`. The `src` files are the source code that needs to be processed by Gulp to include components and
compile assets into the `dist` folder.

## Contribution Workflow

To maintain code quality and consistency:

1. **Format your code**: Before committing any changes, you must run the following command to format HTML, CSS, and JS
   files:
   ```bash
   npm run format
   ```
2. **Commit changes**: Only commit after verifying that your changes are reflected correctly in the `dist` folder and
   that the code is properly formatted.
