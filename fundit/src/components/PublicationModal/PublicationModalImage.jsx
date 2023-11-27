import React from 'react'

export default function PublicationModalImage() {
  return (
    <div className="file-upload-container p-5">
        {!previewImage && (
          <>
            <label htmlFor="file-upload">Subir Archivo</label>
            <input
              id="file-upload"
              className="border border-black p-2 rounded"
              type="file"
              name="image"
              onChange={handleOnChange}
            />
          </>
        )}
        {previewImage && (
          <img
            src={previewImage}
            alt="Vista previa de la imagen"
            className="w-[300px] md:w-full h-full object-contain"
          />
        )}
      </div>
  )
}

