// components/ModalInfo.jsx
"use client";

import { useEffect, useState } from "react";
import { getNotariaDelMesActual, turnosNotarias } from "../utils/notariaData";

const ModalInfo = ({ show, onClose }) => {
  const [notariasMes, setNotariasMes] = useState(null);

  useEffect(() => {
    if (show) {
      const data = getNotariaDelMesActual();
      setNotariasMes(data);
    }
  }, [show]);

  if (!show || !notariasMes) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white max-w-4xl w-full p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Turno Notarial - {notariasMes.mes}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-2xl font-bold">&times;</button>
        </div>
        <div className="space-y-6 max-h-[70vh] overflow-y-auto text-sm">
          {/* Notarías del mes actual */}
          {["valparaiso", "vinaDelMar"].map((zona) => {
            const data = notariasMes[zona];
            return data ? (
              <div key={zona}>
                <h3 className="text-lg font-bold capitalize mb-2">
                  {zona === "valparaiso" ? "Valparaíso" : "Viña del Mar"}
                </h3>
                <div className="border-b pb-2">
                  <p><strong>Oficio:</strong> {data.oficio}</p>
                  <p><strong>Notario(a):</strong> {data.notario}</p>
                  <p><strong>Dirección:</strong> {data.direccion}</p>
                  {data.email && <p><strong>Email:</strong> {data.email}</p>}
                  {data.web && (
                    <p>
                      <strong>Web:</strong>{" "}
                      <a
                        href={`https://${data.web}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {data.web}
                      </a>
                    </p>
                  )}
                  {data.telefono && <p><strong>Teléfono:</strong> {data.telefono.join(" / ")}</p>}
                  {data.jurisdiccion && <p><strong>Jurisdicción:</strong> {data.jurisdiccion}</p>}
                </div>
              </div>
            ) : null;
          })}

          {/* Conservadores siempre visibles */}
          <div>
            <h3 className="text-lg font-bold mb-2">Conservadores</h3>
            <div className="space-y-4">
              {turnosNotarias.conservadores.map((c, i) => (
                <div key={i} className="border-b pb-2">
                  <p><strong>Zona:</strong> {c.zona}</p>
                  <p><strong>Nombre:</strong> {c.nombre}</p>
                  <p><strong>Dirección:</strong> {c.direccion}</p>
                  {c.email && <p><strong>Email:</strong> {c.email}</p>}
                  {c.web && (
                    <p>
                      <strong>Web:</strong>{" "}
                      <a
                        href={`https://${c.web}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {c.web}
                      </a>
                    </p>
                  )}
                  {c.telefono && <p><strong>Teléfono:</strong> {c.telefono.join(" / ")}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
