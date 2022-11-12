import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      className="px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 appearance-none text-white"
      value={theme}
      onChange={e => setTheme(e.target.value)}
    >
      <option value="system">🖥 System</option>
      <option value="dark">🌚 Dark</option>
      <option value="light">🌞 Light</option>
    </select>
  );
};

export default ThemeSwitch;
