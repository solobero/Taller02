const express = require('express');
const router = express.Router();
const pokeneas = require('../data/pokeneasData');

router.get('/json', (req, res) => {
  const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const containerId = 'container_id_desconocido';  // Valor fijo para containerId
  res.json({
    id: randomPokenea.id,
    nombre: randomPokenea.nombre,
    altura: randomPokenea.altura,
    habilidad: randomPokenea.habilidad,
    containerId: containerId
  });
});

router.get('/imagen', (req, res) => {
  const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const containerId = 'container_id_desconocido';  // Valor fijo para containerId
  res.send(`
    <div style="text-align: center;">
      <img src="${randomPokenea.imagen}" alt="${randomPokenea.nombre}" width="200"/>
      <p><em>${randomPokenea.fraseFilosofica}</em></p>
      <p>Container ID: ${containerId}</p>
    </div>
  `);
});

module.exports = router;