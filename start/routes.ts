/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'API - Opipan App',
  }
})

const RecetasController = () => import('#controllers/recetas_controller')
const ProductosController = () => import('#controllers/productos_controller')
const OrdenesController = () => import('#controllers/ordenes_controller')

router.post('/recetas', [RecetasController, 'create'])
router.get('/recetas', [RecetasController, 'index'])
router.get('/recetas/:id', [RecetasController, 'show'])
router.put('/recetas/:id', [RecetasController, 'update'])
router.delete('/recetas/:id', [RecetasController, 'delete'])

router.post('/productos', [ProductosController, 'create'])
router.get('/productos', [ProductosController, 'index'])
router.get('/productos/:id', [ProductosController, 'show'])
router.put('/productos/:id', [ProductosController, 'update'])
router.delete('/productos/:id', [ProductosController, 'delete'])

router.get('/ordenes', [OrdenesController, 'index'])
