import React from 'react';

const DownloadCV: React.FC = () => {
  return (
    <a
      href="/assets/CVHectorDelfinoHernandezPerez.pdf"
      download
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Descargar CV
    </a>
  );
};

export default DownloadCV;
// This component provides a button to download the CV file.
// The file is located in the assets folder and is named CVHectorDelfinoHernandezPerez.pdf
// The button has basic styling for better user experience.