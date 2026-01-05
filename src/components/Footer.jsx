function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {currentYear} Kyllian Delbauche. Tous droits réservés.</p>
      <p className="footer-tech">Fait avec React & Vite</p>
    </footer>
  )
}

export default Footer
