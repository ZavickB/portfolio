// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import ProjectDetail from './components/ProjectDetail.vue';
import ProjectsList from './components/ProjectsList.vue';
import projects from './assets/projects.json';

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/projects',
    name: 'Projects',
    component: ProjectsList,
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: route => ({ project: projects[route.params.id] })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
