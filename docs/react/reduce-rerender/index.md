# 减少不必要的渲染

## Context

使用 Context 传递数据时，如果 Context 的值是一个对象，那么每次组件重新渲染，都会导致 Context 的值发生变化，从而导致组件重新渲染。

::: sandbox {template=vite-react-ts}

```tsx App.tsx
interface ThemeContextType {
  theme: "dark" | "light";
}

import React, { useState, useContext } from "react";

const ThemeContext = React.createContext<ThemeContextType>({ theme: "dark" });

const Child = React.memo(() => {
  const { theme } = useContext(ThemeContext);
  console.log("child render");

  return <div>{theme}</div>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const memoizedTheme = React.useMemo(() => ({ theme: "dark" }), []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <ThemeContext.Provider value={memoizedTheme}>
        <Child />
      </ThemeContext.Provider>
    </>
  );
}
```

:::

从上方代码可以得知，memo ctx + memo cpns 可以有效阻止不必要的渲染
