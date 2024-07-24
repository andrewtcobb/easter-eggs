# React Easter Eggs

This React component library contains a variety of different easter eggs you can add to a project with minimal effort.

Have you a ever wanted to add a flying beach ball to your app? You can add the `FlyingImage` component to your React app just like this:
```tsx
import { FlyingImage } from "react-easter-eggs";

function MyComponent() {
  return (
    <>
      <FlyingImage />
    </>
  );
}
```

Now your users can toggle this easter egg on and off with the shortcut you provide (`ctrl+shift+E` by default).

![beach_ball](https://github.com/user-attachments/assets/d99b992a-b034-493f-8ad1-b7c50fe62c06)

## Installation

Install using your package manager of choice.
```bash
npm i react-easter-eggs
```

## Components
### `FlyingImage`
The `FlyingImage` component will render an image that flies around the screen. By default, the image is a beach ball, but you can pass in any image you like as a prop like so:
```tsx
import { FlyingImage } from "react-easter-eggs";
import myImage from "./path/to/image.png";


function MyComponent() {
  return (
    <>
      <FlyingImage image={myImage}/>
    </>
  );
}
```

<details>
  <summary>Example</summary>

  ![beach_ball](https://github.com/user-attachments/assets/d99b992a-b034-493f-8ad1-b7c50fe62c06)
</details>
