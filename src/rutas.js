import contenido from './components/content.vue'
import infoUsuario from './components/infoUsuario.vue'

export const rutas=[
	{path:'', component: contenido},
	{path:'/info', component: infoUsuario, children:[
		{ path: ':id', component: infoUsuario } 
	]},
	{path:'/contenido', component: contenido}
]