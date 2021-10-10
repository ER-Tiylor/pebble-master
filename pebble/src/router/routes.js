export const routes = [
  { path: '/', component: () => import('../views/home') },
  { path: '/masonryLayout', component: () => import('../components/masonryLayout') },
  { path: '/masonryLayoutCSS', component: () => import('../components/masonryLayoutCSS') },
  { path: '/gridcssdemo', component: () => import('../components/gridcssdemo') },
  { path: '/SimpleDynamicEffect01', component: () => import('../components/SimpleDynamicEffect01') },
  { path: '/StrokeAnimation', component: () => import('../components/StrokeAnimation') },
  { path: '/cssTyping', component: () => import('../components/cssTyping') },
  {path:'/css-secret-book',component:()=>import('../components/css-secret-book')},
  {path:'/MasonryLayouts',component:()=>import('../components/MasonryLayouts')},
  {path:'/css-font',component:()=>import('../components/css-font')},
  {path:'/card-3D-followmouse',component:()=>import('../components/card-3D-followmouse')}
  
]