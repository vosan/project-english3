---
## Path

./src/images/icons.svg#{ICON NAME}
---

## Icon Names

- `icon-arrow-down`
- `icon-arrow-up`
- `icon-close-big`
- `icon-close-small`
- `icon-facebook`
- `icon-instagram`
- `icon-burger-menu-big`
- `icon-burger-menu-small`
- `icon-youtube`

---

## Usage Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ul {
        display: flex;
        gap: 16px;
        list-style: none;
        padding: 0;
        color: teal;
      }

      svg {
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>
        <svg width="24" height="24" fill="currentColor">
          <use xlink:href="./icons.svg#icon-arrow-up"></use>
        </svg>
      </li>
      <li>
        <svg width="24" height="24" fill="currentColor">
          <use xlink:href="./icons.svg#icon-arrow-down"></use>
        </svg>
      </li>
      <li>
        <svg width="32" height="32" stroke="currentColor">
          <use xlink:href="./icons.svg#icon-close-big"></use>
        </svg>
      </li>
      <li>
        <svg width="32" height="32" stroke="currentColor">
          <use xlink:href="./icons.svg#icon-close-small"></use>
        </svg>
      </li>
      <li>
        <svg width="32" height="32" fill="currentColor">
          <use xlink:href="./icons.svg#icon-facebook"></use>
        </svg>
      </li>
      <li>
        <svg width="32" height="32" fill="currentColor">
          <use xlink:href="./icons.svg#icon-instagram"></use>
        </svg>
      </li>
      <li>
        <svg width="32" height="32" stroke="currentColor">
          <use xlink:href="./icons.svg#icon-burger-menu-big"></use>
        </svg>
      </li>
      <li>
        <svg width="32" height="32" stroke="currentColor">
          <use xlink:href="./icons.svg#icon-burger-menu-small"></use>
        </svg>
      </li>
      <li>
        <svg width="32" height="32" fill="currentColor">
          <use xlink:href="./icons.svg#icon-youtube"></use>
        </svg>
      </li>
    </ul>
  </body>
</html>
```
