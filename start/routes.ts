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
    hello: 'world',
  }
})

const RecetasController = () => import('#controllers/recetas_controller')

router.post('/recetas', [RecetasController, 'create'])
router.get('/recetas', [RecetasController, 'index'])
router.put('/recetas/:id', [RecetasController, 'update'])
router.delete('/recetas/:id', [RecetasController, 'delete'])
