function CVDownload({ cvUrl }) {
  return (
    <div className="cv-download">
      <a
        href={cvUrl || "/cv.pdf"}
        download="CV_Kyllian_Delbauche.pdf"
        className="btn btn-cv"
      >
        📄 Télécharger mon CV
      </a>
    </div>
  )
}

export default CVDownload
