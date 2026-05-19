/**
 * Función para navegar a anclajes de manera consistente
 * @param {string} anchor - El ID del elemento al que navegar
 */
export const navigateToAnchor = (anchor) => {
  // Si estamos en la página principal, hacer scroll al anclaje
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Si estamos en otra página, navegar a la principal con el anclaje
    window.location.href = `/${anchor}`;
  }
};

/**
 * Función para crear enlaces de anclaje que funcionen en todas las páginas
 * @param {string} anchor - El ID del elemento al que navegar
 * @param {string} className - Clases CSS para el enlace
 * @param {React.ReactNode} children - Contenido del enlace
 * @returns {JSX.Element} - Elemento de enlace
 */
export const AnchorLink = ({ anchor, className, children, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigateToAnchor(anchor);
  };

  return (
    <a 
      href={`/#${anchor}`} 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}; 