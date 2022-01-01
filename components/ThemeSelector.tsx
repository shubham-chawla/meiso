const ThemeSelector = ({ theme, handleThemeClick }) => {
  return (
    <div onClick={handleThemeClick} className="theme-selector">
      {theme === 'light' ? (
        <span className="icon icon-small">dark_mode</span>
      ) : (
        <span className="icon icon-small">light_mode</span>
      )}
    </div>
  )
}

export default ThemeSelector
